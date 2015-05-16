﻿App.GameplayerRoute = Ember.Route.extend( {

} );

App.GameplayerView = Ember.View.extend( {
    templateName: 'gameplayer'
} );

App.GameplayerController = Ember.Controller.extend( {

    init: function() {
        var unityModule = this.get('unityModule');
        this.setUnityModuleStatus( unityModule );
        this.unityCompatibilityCheck();

        //Maybe Rename
        this.createUnityModule(unityModule);
        this.createDocumentElement(unityModule);
    },

    //<script type='text/javascript'>
    // connect to canvas
    unityModule: {
        testName: 'meowMix',
        filePackagePrefixURL: "dist/unitygames/EscapeFromKingCandy/",
        memoryInitializerPrefixURL: "dist/unitygames/EscapeFromKingCandy/",
        preRun: [],
        postRun: [],
        print: ( function() {
            return function( text ) {
                console.log( text );
            };
        } )(),
        printErr: function( text ) {
            console.error( text );
        },
        canvas: document.getElementById( 'canvas' ),
        progress: null,
        setStatus: function( text ) {
            if ( this.progress == null ) {
                if ( typeof UnityProgress != 'function' )
                    return;
                this.progress = new UnityProgress( canvas );
            }
            if ( !Module.setStatus.last ) Module.setStatus.last = { time: Date.now(), text: '' };
            if ( text === Module.setStatus.text ) return;
            this.progress.SetMessage( text );
            var m = text.match( /([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/ );
            if ( m )
                this.progress.SetProgress( parseInt( m[2] ) / parseInt( m[4] ) );
            if ( text === "" )
                this.progress.Clear()
        },
        totalDependencies: 0,
        monitorRunDependencies: function( left ) {
            this.totalDependencies = Math.max( this.totalDependencies, left );
            Module.setStatus( left ? 'Preparing... (' + ( this.totalDependencies - left ) + '/' + this.totalDependencies + ')' : 'All downloads complete.' );
        }
    },

    //DOESN'T LOOK LIKE THIS IS WORKING CORRECTLY
    setUnityModuleStatus: function( unityModule ) {
        unityModule.setStatus( 'Downloading (0.0/1)' );
    },
    //</script>

    // UNITY CONFIG FILES
    //<script type="text/javascript">
    unityCompatibilityCheck: function() {
        // Identify user agent
        var browser = ( function() {
            var ua = navigator.userAgent, tem,
            M = ua.match( /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i ) || [];
            if ( /trident/i.test( M[1] ) ) {
                tem = /\brv[ :]+(\d+)/g.exec( ua ) || [];
                return 'IE ' + ( tem[1] || '' );
            }
            if ( M[1] === 'Chrome' ) {
                tem = ua.match( /\bOPR\/(\d+)/ )
                if ( tem != null ) return 'Opera ' + tem[1];
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ( ( tem = ua.match( /version\/(\d+)/i ) ) != null ) M.splice( 1, 1, tem[1] );
            return M.join( ' ' );
        } )();

        var hasWebGL = ( function() {
            if ( !window.WebGLRenderingContext ) {
                // Browser has no idea what WebGL is. Suggest they
                // get a new browser by presenting the user with link to
                // http://get.webgl.org
                return 0;
            }

            var canvas = document.createElement( 'canvas' );
            var gl = canvas.getContext( "webgl" );
            if ( !gl ) {
                gl = canvas.getContext( "experimental-webgl" );
                if ( !gl ) {
                    // Browser could not initialize WebGL. User probably needs to
                    // update their drivers or get a new browser. Present a link to
                    // http://get.webgl.org/troubleshooting
                    return 0;
                }
            }
            return 1;
        } )();


        // Check for mobile browsers
        var mobile = ( function( a ) {
            return ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( a ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) )
        } )( navigator.userAgent || navigator.vendor || window.opera );

        // Check for WebGL. Allow running without WebGL on development players for running tests on build farm.
        if ( !0 && !hasWebGL ) {
            alert( "You need a browser which supports WebGL to run this content. Try installing Firefox." );
            window.history.back();
        }
            // Show warnings if needed.
        else if ( mobile ) {
            if ( !confirm( "Please note that Unity WebGL is not currently supported on mobiles. Press Ok if you wish to continue anyways." ) )
                window.history.back();
        }
        else if ( browser.indexOf( "Firefox" ) == -1 && browser.indexOf( "Chrome" ) == -1 && browser.indexOf( "Safari" ) == -1 ) {
            if ( !confirm( "Please note that your browser is not currently supported for this Unity WebGL content. Try installing Firefox, or press Ok if you wish to continue anyways." ) )
                window.history.back();
        }
    },

    didShowErrorMessage: false,

    //window.onerror = function UnityErrorHandler( err, url, line ) {
    //    console.log( "Invoking error handler due to\n" + err );
    //    if ( typeof dump == 'function' )
    //        dump( "Invoking error handler due to\n" + err );
    //    if ( didShowErrorMessage )
    //        return;

    //    didShowErrorMessage = true;
    //    if ( err.indexOf( "DISABLE_EXCEPTION_CATCHING" ) != -1 ) {
    //        alert( "An exception has occured, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project's WebGL player settings to be able to catch the exception or see the stack trace." );
    //        return;
    //    }
    //    if ( err.indexOf( "uncaught exception: abort()" ) != -1 ) {
    //        if ( err.indexOf( "Runtime.dynamicAlloc" ) != -1 ) {
    //            alert( "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings." );
    //            return;
    //        }
    //    }
    //    if ( err.indexOf( "Invalid array buffer length" ) != -1 ) {
    //        alert( "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings." );
    //        return;
    //    }
    //    if ( err.indexOf( "Script error." ) != -1 && document.URL.indexOf( "file:" ) == 0 ) {
    //        alert( "It seems your browser does not support running Unity WebGL content from file:// urls. Please upload it to an http server, or try a different browser." );
    //        return;
    //    }
    //    alert( "An error occured running the Unity content on this page. See your browser's JavaScript console for more info. The error was:\n" + err );
    //}

    //</script>

    //UNITY FILE LOADER 
    //<script>
    //UNITY MODULE OBJECT CREATED HERE?
    createUnityModule: function( unityModule ) {
        var Module = unityModule;

        if ( typeof Module === 'undefined' ) Module = eval( '(function() { try { return Module || {} } catch(e) { return {} } })()' );
        if ( !Module.expectedDataFileDownloads ) {
            Module.expectedDataFileDownloads = 0;
            Module.finishedDataFileDownloads = 0;
        }
        Module.expectedDataFileDownloads++;
        ( function() {

            var PACKAGE_PATH;
            if ( typeof window === 'object' ) {
                PACKAGE_PATH = window['encodeURIComponent']( window.location.pathname.toString().substring( 0, window.location.pathname.toString().lastIndexOf( '/' ) ) + '/' );
            } else {
                // worker
                PACKAGE_PATH = encodeURIComponent( location.pathname.toString().substring( 0, location.pathname.toString().lastIndexOf( '/' ) ) + '/' );
            }
            var PACKAGE_NAME = 'EscapeFromKingCandy.data';
            var REMOTE_PACKAGE_BASE = 'EscapeFromKingCandy.data';
            if ( typeof Module['locateFilePackage'] === 'function' && !Module['locateFile'] ) {
                Module['locateFile'] = Module['locateFilePackage'];
                Module.printErr( 'warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)' );
            }
            var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                                      Module['locateFile']( REMOTE_PACKAGE_BASE ) :
                                      ( ( Module['filePackagePrefixURL'] || '' ) + REMOTE_PACKAGE_BASE );
            var REMOTE_PACKAGE_SIZE = 38071654;
            var PACKAGE_UUID = '461b0f53-7e11-4916-afe4-42b652cba008';

            function fetchRemotePackage( packageName, packageSize, callback, errback ) {
                var xhr = new XMLHttpRequest();
                xhr.open( 'GET', packageName, true );
                xhr.responseType = 'arraybuffer';
                xhr.onprogress = function( event ) {
                    var url = packageName;
                    var size = packageSize;
                    if ( event.total ) size = event.total;
                    if ( event.loaded ) {
                        if ( !xhr.addedTotal ) {
                            xhr.addedTotal = true;
                            if ( !Module.dataFileDownloads ) Module.dataFileDownloads = {};
                            Module.dataFileDownloads[url] = {
                                loaded: event.loaded,
                                total: size
                            };
                        } else {
                            Module.dataFileDownloads[url].loaded = event.loaded;
                        }
                        var total = 0;
                        var loaded = 0;
                        var num = 0;
                        for ( var download in Module.dataFileDownloads ) {
                            var data = Module.dataFileDownloads[download];
                            total += data.total;
                            loaded += data.loaded;
                            num++;
                        }
                        total = Math.ceil( total * Module.expectedDataFileDownloads / num );
                        if ( Module['setStatus'] ) Module['setStatus']( 'Downloading data... (' + loaded + '/' + total + ')' );
                    } else if ( !Module.dataFileDownloads ) {
                        if ( Module['setStatus'] ) Module['setStatus']( 'Downloading data...' );
                    }
                };
                xhr.onload = function( event ) {
                    var packageData = xhr.response;
                    callback( packageData );
                };
                xhr.send( null );
            };

            function handleError( error ) {
                console.error( 'package error:', error );
            };

            var fetched = null, fetchedCallback = null;
            fetchRemotePackage( REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function( data ) {
                if ( fetchedCallback ) {
                    fetchedCallback( data );
                    fetchedCallback = null;
                } else {
                    fetched = data;
                }
            }, handleError );

            function runWithFS() {

                function assert( check, msg ) {
                    if ( !check ) throw msg + new Error().stack;
                }
                Module['FS_createPath']( '/', 'Resources', true, true );

                function DataRequest( start, end, crunched, audio ) {
                    this.start = start;
                    this.end = end;
                    this.crunched = crunched;
                    this.audio = audio;
                }
                DataRequest.prototype = {
                    requests: {},
                    open: function( mode, name ) {
                        this.name = name;
                        this.requests[name] = this;
                        Module['addRunDependency']( 'fp ' + this.name );
                    },
                    send: function() { },
                    onload: function() {
                        var byteArray = this.byteArray.subarray( this.start, this.end );

                        this.finish( byteArray );

                    },
                    finish: function( byteArray ) {
                        var that = this;
                        Module['FS_createPreloadedFile']( this.name, null, byteArray, true, true, function() {
                            Module['removeRunDependency']( 'fp ' + that.name );
                        }, function() {
                            if ( that.audio ) {
                                Module['removeRunDependency']( 'fp ' + that.name ); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
                            } else {
                                Module.printErr( 'Preloading file ' + that.name + ' failed' );
                            }
                        }, false, true ); // canOwn this data in the filesystem, it is a slide into the heap that will never change
                        this.requests[this.name] = null;
                    },
                };
                new DataRequest( 0, 64396, 0, 0 ).open( 'GET', '/level0' );
                new DataRequest( 64396, 72336, 0, 0 ).open( 'GET', '/level1' );
                new DataRequest( 72336, 145160, 0, 0 ).open( 'GET', '/mainData' );
                new DataRequest( 145160, 145377, 0, 0 ).open( 'GET', '/methods_pointedto_by_uievents.xml' );
                new DataRequest( 145377, 13272849, 0, 0 ).open( 'GET', '/resources.assets' );
                new DataRequest( 13272849, 24567810, 0, 0 ).open( 'GET', '/resources.resource' );
                new DataRequest( 24567810, 33009554, 0, 0 ).open( 'GET', '/sharedassets0.assets' );
                new DataRequest( 33009554, 34100427, 0, 0 ).open( 'GET', '/sharedassets0.resource' );
                new DataRequest( 34100427, 35776399, 0, 0 ).open( 'GET', '/sharedassets1.assets' );
                new DataRequest( 35776399, 35992814, 0, 0 ).open( 'GET', '/sharedassets1.resource' );
                new DataRequest( 35992814, 35997174, 0, 0 ).open( 'GET', '/sharedassets2.assets' );
                new DataRequest( 35997174, 37557546, 0, 0 ).open( 'GET', '/Resources/unity_default_resources' );
                new DataRequest( 37557546, 38071654, 0, 0 ).open( 'GET', '/Resources/unity_builtin_extra' );

                function processPackageData( arrayBuffer ) {
                    Module.finishedDataFileDownloads++;
                    assert( arrayBuffer, 'Loading data file failed.' );
                    var byteArray = new Uint8Array( arrayBuffer );
                    var curr;

                    // Reuse the bytearray from the XHR as the source for file reads.
                    DataRequest.prototype.byteArray = byteArray;
                    DataRequest.prototype.requests["/level0"].onload();
                    DataRequest.prototype.requests["/level1"].onload();
                    DataRequest.prototype.requests["/mainData"].onload();
                    DataRequest.prototype.requests["/methods_pointedto_by_uievents.xml"].onload();
                    DataRequest.prototype.requests["/resources.assets"].onload();
                    DataRequest.prototype.requests["/resources.resource"].onload();
                    DataRequest.prototype.requests["/sharedassets0.assets"].onload();
                    DataRequest.prototype.requests["/sharedassets0.resource"].onload();
                    DataRequest.prototype.requests["/sharedassets1.assets"].onload();
                    DataRequest.prototype.requests["/sharedassets1.resource"].onload();
                    DataRequest.prototype.requests["/sharedassets2.assets"].onload();
                    DataRequest.prototype.requests["/Resources/unity_default_resources"].onload();
                    DataRequest.prototype.requests["/Resources/unity_builtin_extra"].onload();
                    Module['removeRunDependency']( 'datafile_EscapeFromKingCandy.data' );

                };
                Module['addRunDependency']( 'datafile_EscapeFromKingCandy.data' );

                if ( !Module.preloadResults ) Module.preloadResults = {};

                Module.preloadResults[PACKAGE_NAME] = { fromCache: false };
                if ( fetched ) {
                    processPackageData( fetched );
                    fetched = null;
                } else {
                    fetchedCallback = processPackageData;
                }

            }
            if ( Module['calledRun'] ) {
                runWithFS();
            } else {
                if ( !Module['preRun'] ) Module['preRun'] = [];
                Module["preRun"].push( runWithFS ); // FS is not initialized yet, wait for it
            }

        } )();

    },
    //</script>

    //<script>
    createDocumentElement: function() {
        if ( !( !Math.fround ) ) {
            var script = document.createElement( 'script' );
            script.src = "dist/unitygames/EscapeFromKingCandy/EscapeFromKingCandy.js";
            document.body.appendChild( script );
        } else {
            var codeXHR = new XMLHttpRequest();
            codeXHR.open( 'GET', 'dist/unitygames/EscapeFromKingCandy/EscapeFromKingCandy.js', true );
            codeXHR.onload = function() {
                var code = codeXHR.responseText;
                if ( !Math.fround ) {
                    console.log( 'optimizing out Math.fround calls' );
                    code = code.replace( /Math_fround\(/g, '(' ).replace( "'use asm'", "'almost asm'" )
                }

                var blob = new Blob( [code], { type: 'text/javascript' } );
                codeXHR = null;
                var src = URL.createObjectURL( blob );
                var script = document.createElement( 'script' );
                script.src = URL.createObjectURL( blob );
                script.onload = function() {
                    URL.revokeObjectURL( script.src );
                };
                document.body.appendChild( script );
            };
            codeXHR.send( null );
        }
    },
    //</script>

    actions: {

        setFullScreen: function( fullscreen ) {
            if ( typeof JSEvents === 'undefined' ) {
                console.log( "Player not loaded yet." );
                return;
            }
            var tmp = JSEvents.canPerformEventHandlerRequests;
            JSEvents.canPerformEventHandlerRequests = function() { return 1; };
            Module.cwrap( 'SetFullscreen', 'void', ['number'] )( fullscreen );
            JSEvents.canPerformEventHandlerRequests = tmp;
        },
    }

} );