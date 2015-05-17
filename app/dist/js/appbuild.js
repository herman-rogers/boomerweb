Ember.TEMPLATES['components/notification-component'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(": ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
              dom.insertBoundary(fragment, null);
              content(env, morph0, context, "message.value");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("b");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element1 = dom.childAt(fragment, [1]);
            var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
            var morph1 = dom.createMorphAt(element1,2,2);
            content(env, morph0, context, "message.field");
            block(env, morph1, context, "if", [get(env, context, "message.value")], {}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-danger");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          dom.setAttribute(el2,"data-dismiss","alert");
          dom.setAttribute(el2,"aria-hidden","true");
          var el3 = dom.createTextNode("\n                ×\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-hand-right");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2,"class","message-inner-separator");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
          var morph1 = dom.createMorphAt(element2,9,9);
          content(env, morph0, context, "notification.title");
          block(env, morph1, context, "each", [get(env, context, "notification.message")], {"keyword": "message"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-success");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          dom.setAttribute(el2,"data-dismiss","alert");
          dom.setAttribute(el2,"aria-hidden","true");
          var el3 = dom.createTextNode("\n                ×\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-ok");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("strong");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.setAttribute(el2,"class","message-inner-separator");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [9]),0,0);
          content(env, morph0, context, "notification.title");
          content(env, morph1, context, "notification.message");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "notification.error")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" Extra Notification Classes if Needed ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("<div class=\"alert alert-info\">");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("<div class=\"alert alert-warning\">");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [6, 1]),1,1);
      block(env, morph0, context, "each", [get(env, context, "notificationMessages")], {"keyword": "notification"}, child0, null);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['about'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary pull-right");
          dom.setAttribute(el1,"type","submit");
          var el2 = dom.createTextNode("\n                            Send Message\n                             \n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2,"class","fa fa-refresh fa-spin fa-lg");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, attribute = hooks.attribute;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          var attrMorph0 = dom.createAttrMorph(element1, 'disabled');
          attribute(env, attrMorph0, element1, "disabled", get(env, context, "sendingMessage"));
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary pull-right");
          dom.setAttribute(el1,"type","submit");
          var el2 = dom.createTextNode("\n                            Send Message\n                             \n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-send");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          element(env, element0, context, "action", ["sendContactRequest"], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","pull-left");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                         ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        inline(env, morph0, context, "post-length", [get(env, context, "model.message")], {});
        block(env, morph1, context, "if", [get(env, context, "sendingMessage")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("What is 5 + 3?");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
        inline(env, morph0, context, "input", [], {"class": "form-control", "id": "verification", "name": "email", "placeholder": "Are You Human?", "value": get(env, context, "verificationNumber")});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                About\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Boomer Rogers");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                My name is Boomer...I know \"is that really your name?\" ...well,\n                its a nickname but I have been Boomer since I was a kid.\n                What can I say, the name has grown on me; Speaking of childhood,\n                I also grew up with computers playing games (Commander Keen!),\n                tweaking with hardware (sometimes to my parents dismay but I did need\n                to splice those wires), messing with software and building small games.\n                Today I still love messing with computers, programming, and playing video games.\n                I'm currently a programmer and Director at West Coast Software ( among other things )\n                and I am always looking to craft awesome software!\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Languages");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("b");
      var el6 = dom.createTextNode("Proficient:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" C#, Java, Javascript, SQL\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("b");
      var el6 = dom.createTextNode("Can Work With:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" C++, Python, PHP\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("b");
      var el6 = dom.createTextNode("Toolbox:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" Unity 3D, Unreal Engine, Ember.js, Laravel\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-4");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("img");
      dom.setAttribute(el5,"class","img-responsive pull-right");
      dom.setAttribute(el5,"src","../app/dist/images/Boomer_profile.png");
      dom.setAttribute(el5,"alt","");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("hr");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-sm-4");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h3");
      var el5 = dom.createTextNode("Drop me a line!");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("address");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("strong");
      var el6 = dom.createTextNode("Email:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","mailto:#");
      var el6 = dom.createTextNode("herman.rogers@gmail.com");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("strong");
      var el6 = dom.createTextNode("Skype:");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" boomer.westcoast\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-sm-8 contact-form");
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("form");
      dom.setAttribute(el4,"id","contact");
      dom.setAttribute(el4,"method","post");
      dom.setAttribute(el4,"class","form");
      dom.setAttribute(el4,"role","form");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","row");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","col-xs-6 col-md-6 form-group");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","col-xs-6 col-md-6 form-group");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","row");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","col-xs-12 col-md-12 form-group");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0, 9, 3, 1]);
      var element3 = dom.childAt(element2, [1]);
      var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
      var morph2 = dom.createMorphAt(element2,3,3);
      var morph3 = dom.createMorphAt(dom.childAt(element2, [7, 1]),1,1);
      inline(env, morph0, context, "input", [], {"class": "form-control", "id": "name", "name": "name", "placeholder": "Name", "type": "text", "value": get(env, context, "model.name"), "disabled": get(env, context, "sendingMessage")});
      inline(env, morph1, context, "input", [], {"class": "form-control", "id": "email", "name": "email", "placeholder": "Email", "value": get(env, context, "model.email"), "disabled": get(env, context, "sendingMessage")});
      inline(env, morph2, context, "textarea", [], {"class": "form-control", "id": "message", "name": "message", "placeholder": "Message", "value": get(env, context, "model.message"), "rows": "5", "disabled": get(env, context, "sendingMessage")});
      block(env, morph3, context, "if", [get(env, context, "humanVerification")], {}, child0, child1);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['addpost'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","img-responsive");
        dom.setAttribute(el1,"alt","");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element2 = dom.childAt(fragment, [1]);
        element(env, element2, context, "bind-attr", [], {"src": get(env, context, "model.image")});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("No Image Selected");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"class","btn");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"class","thumbnail profile-img-card pull-left");
        dom.setAttribute(el2,"alt","");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, attribute = hooks.attribute;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var attrMorph0 = dom.createAttrMorph(element1, 'src');
        element(env, element0, context, "action", ["selectImage", get(env, context, "image"), get(env, context, "model")], {});
        attribute(env, attrMorph0, element1, "src", get(env, context, "image.image_url"));
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                Add New Post\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Jot something down");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("hr");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-7");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Title");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Author");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Image");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Post Body");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","lead");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-fw fa-twitter fa");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Notify Twitter");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-warning");
      var el5 = dom.createTextNode("\n                Cancel\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-remove");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-primary");
      var el5 = dom.createTextNode("\n                Save Post\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-chevron-right");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-primary");
      var el5 = dom.createTextNode("\n                Save and Create Another\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-refresh");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element3 = dom.childAt(fragment, [0, 5, 1]);
      var element4 = dom.childAt(element3, [27]);
      var element5 = dom.childAt(element3, [29]);
      var element6 = dom.childAt(element3, [31]);
      var morph0 = dom.createMorphAt(element3,3,3);
      var morph1 = dom.createMorphAt(element3,7,7);
      var morph2 = dom.createMorphAt(element3,11,11);
      var morph3 = dom.createMorphAt(element3,15,15);
      var morph4 = dom.createMorphAt(dom.childAt(element3, [21]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element3, [25]),1,1);
      inline(env, morph0, context, "input", [], {"class": "form-control", "placeholder": "Title", "type": "text", "value": get(env, context, "model.title")});
      inline(env, morph1, context, "input", [], {"class": "form-control", "placeholder": "Author", "type": "text", "value": get(env, context, "model.author")});
      block(env, morph2, context, "if", [get(env, context, "model.image")], {}, child0, child1);
      block(env, morph3, context, "each", [get(env, context, "controller.images")], {"keyword": "image"}, child2, null);
      inline(env, morph4, context, "textarea", [], {"class": "form-control", "placeholder": "Post Body", "value": get(env, context, "model.post_body"), "rows": "10"});
      inline(env, morph5, context, "input", [], {"class": "form-control", "placeholder": "Tweet", "type": "text", "value": get(env, context, "twitterPost")});
      element(env, element4, context, "action", ["cancel"], {});
      element(env, element5, context, "action", ["createNew"], {});
      element(env, element6, context, "action", ["createNewAndContinue"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['addproject'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","img-responsive");
        dom.setAttribute(el1,"alt","");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [1]);
        element(env, element3, context, "bind-attr", [], {"src": get(env, context, "model.image")});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("No Image Selected");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"class","btn");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"class","thumbnail profile-img-card pull-left");
        dom.setAttribute(el2,"alt","");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, attribute = hooks.attribute;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [1]);
        var attrMorph0 = dom.createAttrMorph(element2, 'src');
        element(env, element1, context, "action", ["selectImage", get(env, context, "image"), get(env, context, "model")], {});
        attribute(env, attrMorph0, element2, "src", get(env, context, "image.image_url"));
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        content(env, morph0, context, "model.type");
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    No Type\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1, 0]);
        var morph0 = dom.createMorphAt(element0,0,0);
        element(env, element0, context, "action", ["selectType", get(env, context, "type")], {});
        content(env, morph0, context, "type");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                Add New Project\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Something new");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("hr");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-7");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Project Name");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Version");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Image");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Project Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","lead");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Project Link");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Project Code");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","lead");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-fw fa-twitter fa");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Notify Twitter");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Add Type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dropdown");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"id","dLabel");
      dom.setAttribute(el5,"role","button");
      dom.setAttribute(el5,"data-toggle","dropdown");
      dom.setAttribute(el5,"class","btn btn-primary");
      dom.setAttribute(el5,"data-target","#");
      dom.setAttribute(el5,"href","/page.html");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","caret");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","dropdown-menu multi-level");
      dom.setAttribute(el5,"role","menu");
      dom.setAttribute(el5,"aria-labelledby","dropdownMenu");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-warning");
      var el5 = dom.createTextNode("\n                Cancel\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-remove");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-primary");
      var el5 = dom.createTextNode("\n                Save Post\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-chevron-right");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn btn-primary");
      var el5 = dom.createTextNode("\n                Save and Create Another\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-refresh");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0, 5, 1]);
      var element5 = dom.childAt(element4, [39]);
      var element6 = dom.childAt(element4, [43]);
      var element7 = dom.childAt(element4, [45]);
      var element8 = dom.childAt(element4, [47]);
      var morph0 = dom.createMorphAt(element4,3,3);
      var morph1 = dom.createMorphAt(element4,7,7);
      var morph2 = dom.createMorphAt(element4,11,11);
      var morph3 = dom.createMorphAt(element4,15,15);
      var morph4 = dom.createMorphAt(dom.childAt(element4, [21]),1,1);
      var morph5 = dom.createMorphAt(element4,23,23);
      var morph6 = dom.createMorphAt(element4,27,27);
      var morph7 = dom.createMorphAt(dom.childAt(element4, [31]),1,1);
      var morph8 = dom.createMorphAt(dom.childAt(element4, [35]),1,1);
      var morph9 = dom.createMorphAt(dom.childAt(element5, [1]),1,1);
      var morph10 = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
      inline(env, morph0, context, "input", [], {"class": "form-control", "placeholder": "Project Name", "type": "text", "value": get(env, context, "model.name")});
      inline(env, morph1, context, "input", [], {"class": "form-control", "placeholder": "Version", "type": "text", "value": get(env, context, "model.subheading")});
      block(env, morph2, context, "if", [get(env, context, "model.image")], {}, child0, child1);
      block(env, morph3, context, "each", [get(env, context, "controller.images")], {"keyword": "image"}, child2, null);
      inline(env, morph4, context, "textarea", [], {"class": "form-control", "placeholder": "Post Body", "value": get(env, context, "model.description"), "rows": "10"});
      inline(env, morph5, context, "post-length", [get(env, context, "model.description")], {});
      inline(env, morph6, context, "input", [], {"class": "form-control", "value": get(env, context, "model.project_link")});
      inline(env, morph7, context, "input", [], {"class": "form-control", "value": get(env, context, "model.code_link")});
      inline(env, morph8, context, "input", [], {"class": "form-control", "placeholder": "Tweet", "type": "text", "value": get(env, context, "twitterPost")});
      block(env, morph9, context, "if", [get(env, context, "model.type")], {}, child3, child4);
      block(env, morph10, context, "each", [get(env, context, "projectTypes")], {"keyword": "type"}, child5, null);
      element(env, element6, context, "action", ["cancel"], {});
      element(env, element7, context, "action", ["createNew"], {});
      element(env, element8, context, "action", ["createNewAndContinue"], {});
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['blog'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-warning");
          var el2 = dom.createTextNode("\n            Cancel\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-remove");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary");
          var el2 = dom.createTextNode("\n            Save\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-chevron-right");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element15 = dom.childAt(fragment, [1]);
          var element16 = dom.childAt(fragment, [3]);
          element(env, element15, context, "action", ["cancelState"], {});
          element(env, element16, context, "action", ["saveEdits"], {});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Add Post\n         \n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","glyphicon glyphicon-plus");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary");
          var el2 = dom.createTextNode("\n            Edit Posts\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-edit");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element14 = dom.childAt(fragment, [2]);
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "link-to", ["addpost"], {"class": "btn btn-primary"}, child0, null);
          element(env, element14, context, "action", ["editState"], {});
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Photo Manager\n         \n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","glyphicon glyphicon-camera fa-lg");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","toolbar");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" EDIT AND ADD POSTS BUTTONS ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element17 = dom.childAt(fragment, [0, 1]);
        var morph0 = dom.createMorphAt(element17,3,3);
        var morph1 = dom.createMorphAt(element17,4,4);
        block(env, morph0, context, "if", [get(env, context, "isEditing")], {}, child0, child1);
        block(env, morph1, context, "link-to", ["photomanager"], {"class": "btn btn-primary"}, child2, null);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2,"class","thumbnail profile-img-card pull-left");
            dom.setAttribute(el2,"alt","");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, attribute = hooks.attribute;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element11 = dom.childAt(fragment, [1]);
            var element12 = dom.childAt(element11, [1]);
            var attrMorph0 = dom.createAttrMorph(element12, 'src');
            element(env, element11, context, "action", ["selectImage", get(env, context, "image"), get(env, context, "post")], {});
            attribute(env, attrMorph0, element12, "src", get(env, context, "image.image_url"));
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-warning");
            var el2 = dom.createTextNode("\n                Cancel\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-remove");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-danger");
            var el2 = dom.createTextNode("\n                Confirm\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-check");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element9 = dom.childAt(fragment, [1]);
            var element10 = dom.childAt(fragment, [3]);
            element(env, element9, context, "action", ["cancelDelete", get(env, context, "post")], {});
            element(env, element10, context, "action", ["confirmDelete", get(env, context, "post")], {});
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-danger");
            var el2 = dom.createTextNode("\n                Delete Post\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-trash");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element8 = dom.childAt(fragment, [1]);
            element(env, element8, context, "action", ["deleteModel", get(env, context, "post")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("small");
          var el3 = dom.createTextNode("Title");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","lead");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h1");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("small");
          var el4 = dom.createTextNode("Author");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-time");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Posted on ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("small");
          var el3 = dom.createTextNode("Image");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"class","img-responsive");
          dom.setAttribute(el1,"alt","");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("small");
          var el3 = dom.createTextNode("Post Body");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" DELETE BUTTONS ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" DISPLAY POSTS NORMALLY ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element13 = dom.childAt(fragment, [15]);
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(fragment, [5]),3,3);
          var morph2 = dom.createMorphAt(dom.childAt(fragment, [9, 2]),0,0);
          var morph3 = dom.createMorphAt(fragment,19,19,contextualElement);
          var morph4 = dom.createMorphAt(dom.childAt(fragment, [23]),0,0);
          var morph5 = dom.createMorphAt(fragment,27,27,contextualElement);
          inline(env, morph0, context, "input", [], {"class": "form-control", "type": "text", "value": get(env, context, "post.title")});
          inline(env, morph1, context, "input", [], {"class": "form-control", "type": "text", "value": get(env, context, "post.author")});
          inline(env, morph2, context, "date-format", [get(env, context, "post.created_at")], {});
          element(env, element13, context, "bind-attr", [], {"src": get(env, context, "post.image")});
          block(env, morph3, context, "each", [get(env, context, "controller.images")], {"keyword": "image"}, child0, null);
          inline(env, morph4, context, "text-editor", [], {"value": get(env, context, "post.post_body"), "rows": "15"});
          block(env, morph5, context, "if", [get(env, context, "post.enableDelete")], {}, child1, child2);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"class","btn btn-default");
            var el3 = dom.createTextNode("\n                    Hide\n                     \n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","glyphicon glyphicon-minus-sign");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element6 = dom.childAt(fragment, [1, 1]);
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
            element(env, element6, context, "action", ["toggleExpand", get(env, context, "post")], {});
            inline(env, morph0, context, "formatted-text", [get(env, context, "post.post_body")], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"class","btn btn-primary");
            var el3 = dom.createTextNode("\n                    Read More\n                     \n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","glyphicon glyphicon-plus-sign");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, subexpr = hooks.subexpr, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element5 = dom.childAt(fragment, [1, 1]);
            var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
            element(env, element5, context, "action", ["toggleExpand", get(env, context, "post")], {});
            inline(env, morph0, context, "formatted-text", [subexpr(env, context, "truncate", [get(env, context, "post.post_body")], {"limit": 50})], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","lead");
          var el2 = dom.createTextNode("\n                by ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-time");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Posted on ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"class","img-responsive");
          dom.setAttribute(el1,"alt","");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, element = hooks.element, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element7 = dom.childAt(fragment, [11]);
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
          var morph2 = dom.createMorphAt(dom.childAt(fragment, [7, 2]),0,0);
          var morph3 = dom.createMorphAt(fragment,15,15,contextualElement);
          dom.insertBoundary(fragment, null);
          content(env, morph0, context, "post.title");
          content(env, morph1, context, "post.author");
          inline(env, morph2, context, "date-format", [get(env, context, "post.created_at")], {});
          element(env, element7, context, "bind-attr", [], {"src": get(env, context, "post.image")});
          block(env, morph3, context, "if", [get(env, context, "post.expanded")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" EDIT MAIN FORM ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
        block(env, morph0, context, "if", [get(env, context, "isEditing")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" POST TO TWITTER ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Post to twitter");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","lead");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","btn btn-primary pull-right");
        var el3 = dom.createTextNode("\n                    Tweet\n                     \n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","glyphicon glyphicon-send");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [5]);
        var element4 = dom.childAt(element3, [5]);
        var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
        var morph1 = dom.createMorphAt(element3,3,3);
        inline(env, morph0, context, "textarea", [], {"class": "form-control", "value": get(env, context, "twitterPost.text"), "rows": "5"});
        inline(env, morph1, context, "post-length", [get(env, context, "twitterPost.text")], {});
        element(env, element4, context, "action", ["postToTwitter"], {});
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-refresh fa-spin fa-lg");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","message-item");
          dom.setAttribute(el2,"id","m1");
          var el3 = dom.createTextNode("\n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","message-inner");
          var el4 = dom.createTextNode("\n                                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","message-head");
          var el5 = dom.createTextNode("\n                                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5,"class","user-detail");
          var el6 = dom.createTextNode("\n                                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6,"class","post-meta");
          var el7 = dom.createTextNode("\n                                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("div");
          dom.setAttribute(el7,"class","avatar pull-left");
          var el8 = dom.createTextNode("\n                                                    ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("img");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n                                                ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                                ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("div");
          dom.setAttribute(el7,"class","asker-meta");
          var el8 = dom.createTextNode("\n                                                    ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("span");
          dom.setAttribute(el8,"class","qa-message-what");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n                                                    ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("span");
          dom.setAttribute(el8,"class","qa-message-when");
          var el9 = dom.createTextNode("\n                                                        ");
          dom.appendChild(el8, el9);
          var el9 = dom.createElement("span");
          dom.setAttribute(el9,"class","qa-message-when-data pull-right");
          var el10 = dom.createTextNode("\n                                                            ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("span");
          dom.setAttribute(el10,"class","glyphicon glyphicon-time");
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                                                            ");
          dom.appendChild(el9, el10);
          var el10 = dom.createComment("");
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                                                        ");
          dom.appendChild(el9, el10);
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode("\n                                                    ");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n                                                ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                                            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                                        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","qa-message-content");
          var el5 = dom.createTextNode("\n                                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [1, 1, 1]);
          var element2 = dom.childAt(element1, [1, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [3, 3, 1]),3,3);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 1]),0,0);
          element(env, element2, context, "bind-attr", [], {"src": get(env, context, "tweet.user.profile_image_url")});
          inline(env, morph0, context, "date-format", [get(env, context, "tweet.created_at")], {});
          content(env, morph1, context, "tweet.text");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "tweet.text")], {}, child0, null);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                DevBlog\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Tech Talk");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment(" LOAD MORE BUTTON ");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"class","form-control btn btn-primary");
      var el5 = dom.createTextNode("\n                Load More\n                 \n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","glyphicon glyphicon-download fa-lg");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" BLOG SIDE BAR ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-offset-9");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","chat-panel");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h2");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","https://twitter.com/boomer_web");
      var el7 = dom.createElement("i");
      dom.setAttribute(el7,"class","fa fa-fw fa-twitter fa-lg");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("twitter");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","panel-body");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("ul");
      dom.setAttribute(el6,"class","chat");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, attribute = hooks.attribute, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element18 = dom.childAt(fragment, [2, 3]);
      var element19 = dom.childAt(element18, [1]);
      var element20 = dom.childAt(element19, [5]);
      var element21 = dom.childAt(element18, [5]);
      var element22 = dom.childAt(element21, [3]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element19,1,1);
      var attrMorph0 = dom.createAttrMorph(element20, 'disabled');
      var morph2 = dom.createMorphAt(element21,1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element22, [1]),3,3);
      var morph4 = dom.createMorphAt(dom.childAt(element22, [3, 1]),1,1);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "loggedIn")], {}, child0, null);
      block(env, morph1, context, "each", [get(env, context, "controller.loadPosts")], {"keyword": "post"}, child1, null);
      attribute(env, attrMorph0, element20, "disabled", get(env, context, "allPostsLoaded"));
      element(env, element20, context, "action", ["loadMorePosts"], {});
      block(env, morph2, context, "if", [get(env, context, "loggedIn")], {}, child2, null);
      block(env, morph3, context, "if", [get(env, context, "loadingTweets")], {}, child3, null);
      block(env, morph4, context, "each", [get(env, context, "controller.tweets")], {"keyword": "tweet"}, child4, null);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['gameplayer'] =  Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("p");
      dom.setAttribute(el1,"class","header");
      var el2 = dom.createElement("span");
      var el3 = dom.createTextNode("Unity WebGL Player | ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("EscapeFromKingCandy");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","template-wrap clear");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("canvas");
      dom.setAttribute(el2,"class","emscripten");
      dom.setAttribute(el2,"id","canvas");
      dom.setAttribute(el2,"oncontextmenu","event.preventDefault()");
      dom.setAttribute(el2,"height","600px");
      dom.setAttribute(el2,"width","960px");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","logo");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","fullscreen");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","dist/images/fullscreen.png");
      dom.setAttribute(el3,"width","38");
      dom.setAttribute(el3,"height","38");
      dom.setAttribute(el3,"alt","Fullscreen");
      dom.setAttribute(el3,"title","Fullscreen");
      dom.setAttribute(el3,"onclick","SetFullscreen(1);");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","title");
      var el3 = dom.createTextNode("EscapeFromKingCandy");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['index'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Portfolio");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("DevBlog");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("About");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-primary header-button pull-right");
        var el2 = dom.createTextNode("\n                        Log Out\n                         \n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","glyphicon glyphicon-log-out");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [1]);
        element(env, element3, context, "action", ["logout"], {});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-primary header-button pull-right");
        dom.setAttribute(el1,"data-toggle","modal");
        dom.setAttribute(el1,"data-target","#myModal");
        var el2 = dom.createTextNode("\n                        Log In\n                         \n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","glyphicon glyphicon-log-in");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element2 = dom.childAt(fragment, [1]);
        element(env, element2, context, "action", ["showModalLogin"], {});
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        dom.setAttribute(el1,"id","myModal");
        dom.setAttribute(el1,"tabindex","-1");
        dom.setAttribute(el1,"role","dialog");
        dom.setAttribute(el1,"aria-labelledby","myModalLabel");
        dom.setAttribute(el1,"aria-hidden","true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","card card-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Login");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3,"class","form-signin");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"id","reauth-email");
        dom.setAttribute(el4,"class","reauth-email");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"id","remember");
        dom.setAttribute(el4,"class","checkbox");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"type","checkbox");
        dom.setAttribute(el6,"value","remember-me");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Remember me\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-lg btn-primary btn-block btn-signin");
        dom.setAttribute(el4,"type","submit");
        var el5 = dom.createTextNode("\n                Log In\n                 \n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","glyphicon glyphicon-log-in");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var element1 = dom.childAt(element0, [9]);
        var morph0 = dom.createMorphAt(element0,3,3);
        var morph1 = dom.createMorphAt(element0,5,5);
        inline(env, morph0, context, "input", [], {"type": "email", "class": "form-control", "id": "inputEmail", "placeholder": "Email Address", "value": get(env, context, "email")});
        inline(env, morph1, context, "input", [], {"type": "password", "class": "form-control", "id": "inputPassword", "placeholder": "Password", "value": get(env, context, "password")});
        element(env, element1, context, "action", ["login"], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("nav");
      dom.setAttribute(el2,"class","navbar navbar-default navbar-fixed-top");
      dom.setAttribute(el2,"role","navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","container");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","navbar-header");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"type","button");
      dom.setAttribute(el5,"class","navbar-toggle");
      dom.setAttribute(el5,"data-toggle","collapse");
      dom.setAttribute(el5,"data-target","#bs-example-navbar-collapse-1");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","sr-only");
      var el7 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","icon-bar");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"class","navbar-brand");
      var el6 = dom.createTextNode("BoomerWeb");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","collapse navbar-collapse");
      dom.setAttribute(el4,"id","bs-example-navbar-collapse-1");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","nav navbar-nav");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("<li>GamePlayer</li>");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"style","padding-bottom:50px");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block, get = hooks.get, inline = hooks.inline, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0, 1, 1, 3]);
      var element5 = dom.childAt(element4, [1]);
      var morph0 = dom.createMorphAt(dom.childAt(element5, [1]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element5, [3]),0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element5, [7]),0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      var morph4 = dom.createMorphAt(fragment,2,2,contextualElement);
      var morph5 = dom.createMorphAt(fragment,4,4,contextualElement);
      var morph6 = dom.createMorphAt(fragment,6,6,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "link-to", ["portfolio"], {}, child0, null);
      block(env, morph1, context, "link-to", ["blog"], {}, child1, null);
      block(env, morph2, context, "link-to", ["about"], {}, child2, null);
      block(env, morph3, context, "if", [get(env, context, "loggedIn")], {}, child3, child4);
      inline(env, morph4, context, "notification-component", [], {"notificationMessages": get(env, context, "currentNotifications")});
      block(env, morph5, context, "if", [get(env, context, "modalLogin")], {}, child5, null);
      content(env, morph6, context, "outlet");
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['notfound'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        Take Me Home\n                         \n                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","glyphicon glyphicon-home");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","error-template");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h1");
      var el6 = dom.createTextNode("\n                    PAGE Y U NO LOAD!\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("a");
      dom.setAttribute(el5,"href","#");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-thumbnail");
      dom.setAttribute(el6,"src","../app/dist/images/404.png");
      dom.setAttribute(el6,"alt","");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("h2");
      var el6 = dom.createTextNode("\n                    404 Not Found\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","error-details");
      var el6 = dom.createTextNode("\n                    Sorry, the requested page could not be found.\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","error-actions");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1, 11]),1,1);
      block(env, morph0, context, "link-to", ["portfolio"], {"class": "btn btn-primary btn-lg"}, child0, null);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['photomanager'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-refresh fa-spin fa-2x");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","col-sm-4 col-xs-6 col-md-3 col-lg-3");
            var el2 = dom.createTextNode("\n                            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"class","thumbnail fancybox");
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"class","img-responsive");
            dom.setAttribute(el3,"alt","");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3,"class","text-right");
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("small");
            dom.setAttribute(el4,"class","text-muted");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("small");
            dom.setAttribute(el4,"class","text-muted");
            var el5 = dom.createTextNode(" size:");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, attribute = hooks.attribute, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element5 = dom.childAt(fragment, [1, 1]);
            var element6 = dom.childAt(element5, [1]);
            var element7 = dom.childAt(element5, [3]);
            var attrMorph0 = dom.createAttrMorph(element6, 'src');
            var morph0 = dom.createMorphAt(dom.childAt(element7, [1]),0,0);
            var morph1 = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
            element(env, element5, context, "action", ["selectImage", get(env, context, "image")], {});
            attribute(env, attrMorph0, element6, "src", get(env, context, "image.image_url"));
            content(env, morph0, context, "image.name");
            content(env, morph1, context, "image.image_size");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "each", [get(env, context, "model")], {"keyword": "image"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("small");
          var el3 = dom.createTextNode("No Photos to Edit");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "model")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-danger pull-left");
        var el2 = dom.createTextNode("\n                    Delete ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                     \n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","glyphicon glyphicon-trash");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element4 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element4,1,1);
        element(env, element4, context, "action", ["deleteImage", get(env, context, "selectedImage")], {});
        content(env, morph0, context, "selectedImage.name");
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1,"class","uploading-percentage");
        var el2 = dom.createTextNode("Uploaded Percentage: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("%");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        content(env, morph0, context, "uploadStatus.percentComplete");
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","error");
          var el2 = dom.createTextNode("An error occurred during the upload process. Please try again.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-sm-4 col-xs-6 col-md-3 col-lg-3");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"class","thumbnail fancybox");
          var el3 = dom.createTextNode("\n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          var el4 = dom.createTextNode("\n                                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"class","btn btn-danger");
          var el3 = dom.createTextNode("\n                                Delete Photo\n                                 \n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","glyphicon glyphicon-trash");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1, 1]);
          var element3 = dom.childAt(element1, [3]);
          var morph0 = dom.createMorphAt(element2,1,1);
          var morph1 = dom.createMorphAt(element2,3,3);
          element(env, element2, context, "bind-attr", [], {"class": "className :file"});
          content(env, morph0, context, "fileImage.name");
          block(env, morph1, context, "view", [get(env, context, "view.ImagePreview")], {"image": get(env, context, "fileImage"), "class": "img-responsive"}, child0, null);
          element(env, element3, context, "action", ["deleteFile", get(env, context, "fileImage")], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "uploadStatus.error")], {}, child0, null);
        block(env, morph1, context, "each", [get(env, context, "controller.validFiles")], {"keyword": "fileImage"}, child1, null);
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "view", [get(env, context, "view.SingleInput")], {});
        return fragment;
      }
    };
  }());
  var child6 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-primary");
        var el2 = dom.createTextNode("\n                Upload All Files\n                 \n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","glyphicon glyphicon-upload");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [3]);
        element(env, element0, context, "action", ["uploadAllFiles"], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                Photo Manager\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Add new images");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h2");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Photo Editor");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","btn");
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","container");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","row");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","list-group gallery");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h2");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Photo Uploader");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","container");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","row");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","list-group gallery");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-8");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, element = hooks.element, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element8 = dom.childAt(fragment, [0]);
      var element9 = dom.childAt(element8, [3, 1]);
      var element10 = dom.childAt(element9, [3]);
      var element11 = dom.childAt(element9, [5]);
      var element12 = dom.childAt(element8, [5, 1]);
      var element13 = dom.childAt(element8, [7]);
      var morph0 = dom.createMorphAt(dom.childAt(element11, [1, 1]),1,1);
      var morph1 = dom.createMorphAt(element11,3,3);
      var morph2 = dom.createMorphAt(element12,3,3);
      var morph3 = dom.createMorphAt(dom.childAt(element12, [5, 1, 1]),1,1);
      var morph4 = dom.createMorphAt(dom.childAt(element13, [1]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element13, [3]),1,1);
      element(env, element10, context, "action", ["selectImage", get(env, context, "image"), get(env, context, "project")], {});
      block(env, morph0, context, "if", [get(env, context, "loadingImages")], {}, child0, child1);
      block(env, morph1, context, "if", [get(env, context, "selectedImage")], {}, child2, null);
      block(env, morph2, context, "if", [get(env, context, "uploadStatus.uploading")], {}, child3, null);
      block(env, morph3, context, "view", [get(env, context, "view.DragDrop")], {}, child4, null);
      block(env, morph4, context, "view", [get(env, context, "view.DragDrop")], {}, child5, null);
      block(env, morph5, context, "if", [get(env, context, "controller.validFiles")], {}, child6, null);
      return fragment;
    }
  };
}()));
Ember.TEMPLATES['portfolio'] =  Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-warning");
          var el2 = dom.createTextNode("\n            Cancel\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-remove");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary");
          var el2 = dom.createTextNode("\n            Save\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-chevron-right");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element20 = dom.childAt(fragment, [1]);
          var element21 = dom.childAt(fragment, [3]);
          element(env, element20, context, "action", ["cancelState"], {});
          element(env, element21, context, "action", ["saveEdits"], {});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Add Project\n         \n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","glyphicon glyphicon-plus");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-primary");
          var el2 = dom.createTextNode("\n            Edit Projects\n             \n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","glyphicon glyphicon-edit");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element19 = dom.childAt(fragment, [2]);
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "link-to", ["addproject"], {"class": "btn btn-primary"}, child0, null);
          element(env, element19, context, "action", ["editState"], {});
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Photo Manager\n         \n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","glyphicon glyphicon-camera fa-lg");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","toolbar");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" EDIT AND ADD PROJECTS BUTTONS ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element22 = dom.childAt(fragment, [0, 1]);
        var morph0 = dom.createMorphAt(element22,3,3);
        var morph1 = dom.createMorphAt(element22,4,4);
        block(env, morph0, context, "if", [get(env, context, "isEditing")], {}, child0, child1);
        block(env, morph1, context, "link-to", ["photomanager"], {"class": "btn btn-primary"}, child2, null);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        content(env, morph0, context, "selectedType");
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        Filter By\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element18 = dom.childAt(fragment, [1, 0]);
        var morph0 = dom.createMorphAt(element18,0,0);
        element(env, element18, context, "action", ["sortProjectByType", get(env, context, "type")], {});
        content(env, morph0, context, "type");
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2,"class","thumbnail profile-img-card pull-left");
            dom.setAttribute(el2,"alt","");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, attribute = hooks.attribute;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element11 = dom.childAt(fragment, [1]);
            var element12 = dom.childAt(element11, [1]);
            var attrMorph0 = dom.createAttrMorph(element12, 'src');
            element(env, element11, context, "action", ["selectImage", get(env, context, "image"), get(env, context, "project")], {});
            attribute(env, attrMorph0, element12, "src", get(env, context, "image.image_url"));
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2,"href","#");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element10 = dom.childAt(fragment, [1, 0]);
            var morph0 = dom.createMorphAt(element10,0,0);
            element(env, element10, context, "action", ["editProjectType", get(env, context, "project"), get(env, context, "type")], {});
            content(env, morph0, context, "type");
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-warning");
            var el2 = dom.createTextNode("\n                Cancel\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-remove");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-danger");
            var el2 = dom.createTextNode("\n                Confirm\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-check");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element8 = dom.childAt(fragment, [1]);
            var element9 = dom.childAt(fragment, [3]);
            element(env, element8, context, "action", ["cancelDelete", get(env, context, "project")], {});
            element(env, element9, context, "action", ["confirmDelete", get(env, context, "project")], {});
            return fragment;
          }
        };
      }());
      var child3 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","btn btn-danger");
            var el2 = dom.createTextNode("\n                Delete Project\n                 \n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","glyphicon glyphicon-trash");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element7 = dom.childAt(fragment, [1]);
            element(env, element7, context, "action", ["deleteModel", get(env, context, "project")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-md-7");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3,"class","img-responsive");
          dom.setAttribute(el3,"alt","");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("hr");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-md-5");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Title");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Version Number");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Project Description");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","lead");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Main Project Link");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","lead");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Project Type");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","dropdown");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"id","dLabel");
          dom.setAttribute(el4,"role","button");
          dom.setAttribute(el4,"data-toggle","dropdown");
          dom.setAttribute(el4,"class","btn btn-primary");
          dom.setAttribute(el4,"data-target","#");
          dom.setAttribute(el4,"href","/page.html");
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","caret");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4,"class","dropdown-menu multi-level");
          dom.setAttribute(el4,"role","menu");
          dom.setAttribute(el4,"aria-labelledby","dropdownMenu");
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("small");
          var el5 = dom.createTextNode("Project Code Link");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3,"class","lead");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" DELETE BUTTONS ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" DISPLAY PROJECTS NORMALLY ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element, block = hooks.block, inline = hooks.inline, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element13 = dom.childAt(fragment, [1]);
          var element14 = dom.childAt(element13, [1]);
          var element15 = dom.childAt(element14, [1]);
          var element16 = dom.childAt(element13, [3]);
          var element17 = dom.childAt(element16, [19]);
          var morph0 = dom.createMorphAt(element14,5,5);
          var morph1 = dom.createMorphAt(dom.childAt(element16, [3]),0,0);
          var morph2 = dom.createMorphAt(dom.childAt(element16, [7]),0,0);
          var morph3 = dom.createMorphAt(dom.childAt(element16, [11]),0,0);
          var morph4 = dom.createMorphAt(dom.childAt(element16, [15]),1,1);
          var morph5 = dom.createMorphAt(dom.childAt(element17, [1]),1,1);
          var morph6 = dom.createMorphAt(dom.childAt(element17, [3]),1,1);
          var morph7 = dom.createMorphAt(dom.childAt(element16, [23]),0,0);
          var morph8 = dom.createMorphAt(element16,27,27);
          element(env, element15, context, "bind-attr", [], {"src": get(env, context, "project.image")});
          block(env, morph0, context, "each", [get(env, context, "controller.images")], {"keyword": "image"}, child0, null);
          inline(env, morph1, context, "input", [], {"class": "form-control", "type": "text", "value": get(env, context, "project.name")});
          inline(env, morph2, context, "input", [], {"class": "form-control", "type": "text", "value": get(env, context, "project.subheading")});
          inline(env, morph3, context, "textarea", [], {"class": "form-control", "value": get(env, context, "project.description"), "rows": "10"});
          inline(env, morph4, context, "input", [], {"class": "form-control", "value": get(env, context, "project.project_link")});
          content(env, morph5, context, "project.type");
          block(env, morph6, context, "each", [get(env, context, "projectTypes")], {"keyword": "type"}, child1, null);
          inline(env, morph7, context, "input", [], {"class": "form-control", "value": get(env, context, "project.code_link")});
          block(env, morph8, context, "if", [get(env, context, "project.enableDelete")], {}, child2, child3);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1,"class","btn btn-primary");
              var el2 = dom.createTextNode("\n                View Code\n                 \n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("span");
              dom.setAttribute(el2,"class","fa fa-fw fa-github fa-lg");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, attribute = hooks.attribute;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element1 = dom.childAt(fragment, [1]);
              var attrMorph0 = dom.createAttrMorph(element1, 'href');
              attribute(env, attrMorph0, element1, "href", get(env, context, "project.code_link"));
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1,"class","btn btn-primary");
              var el2 = dom.createTextNode("\n                View Project\n                 \n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("span");
              dom.setAttribute(el2,"class","glyphicon glyphicon-chevron-right");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, attribute = hooks.attribute;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element0 = dom.childAt(fragment, [1]);
              var attrMorph0 = dom.createAttrMorph(element0, 'href');
              attribute(env, attrMorph0, element0, "href", get(env, context, "project.project_link"));
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","row");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col-md-7");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createElement("span");
            dom.setAttribute(el4,"class","glyphicon glyphicon-time");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(" Updated on ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("b");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3,"class","img-responsive");
            dom.setAttribute(el3,"alt","");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col-md-5");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h3");
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("  ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("small");
            var el5 = dom.createTextNode("\n                    ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5,"class","glyphicon glyphicon-tag");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h4");
            var el4 = dom.createTextNode("Version ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h5");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("hr");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("hr");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element3, [3]);
            var element5 = dom.childAt(element2, [3]);
            var element6 = dom.childAt(element5, [1]);
            var morph0 = dom.createMorphAt(dom.childAt(element3, [1, 2]),0,0);
            var morph1 = dom.createMorphAt(element6,1,1);
            var morph2 = dom.createMorphAt(dom.childAt(element6, [3]),3,3);
            var morph3 = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
            var morph4 = dom.createMorphAt(dom.childAt(element5, [9]),0,0);
            var morph5 = dom.createMorphAt(element5,13,13);
            var morph6 = dom.createMorphAt(element5,14,14);
            inline(env, morph0, context, "date-format", [get(env, context, "project.updated_at")], {});
            element(env, element4, context, "bind-attr", [], {"src": get(env, context, "project.image")});
            content(env, morph1, context, "project.name");
            content(env, morph2, context, "project.type");
            content(env, morph3, context, "project.subheading");
            content(env, morph4, context, "project.description");
            block(env, morph5, context, "if", [get(env, context, "project.code_link")], {}, child0, null);
            block(env, morph6, context, "if", [get(env, context, "project.project_link")], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "if", [get(env, context, "project.typeFilter")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" EDIT MAIN FORM ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        block(env, morph0, context, "if", [get(env, context, "isEditing")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-7");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("No Project Types Found");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-lg-12");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("h1");
      dom.setAttribute(el4,"class","page-header");
      var el5 = dom.createTextNode("\n                Portfolio\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("small");
      var el6 = dom.createTextNode("Software and Games");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment(" Single button ");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dropdown pull-right");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"id","dLabel");
      dom.setAttribute(el6,"role","button");
      dom.setAttribute(el6,"data-toggle","dropdown");
      dom.setAttribute(el6,"class","btn btn-primary");
      dom.setAttribute(el6,"data-target","#");
      dom.setAttribute(el6,"href","/page.html");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","caret");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("ul");
      dom.setAttribute(el6,"class","dropdown-menu multi-level");
      dom.setAttribute(el6,"role","menu");
      dom.setAttribute(el6,"aria-labelledby","dropdownMenu");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"class","btn btn-primary");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","glyphicon glyphicon-remove");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element23 = dom.childAt(fragment, [2]);
      var element24 = dom.childAt(element23, [1, 1, 1, 5]);
      var element25 = dom.childAt(element24, [5]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(dom.childAt(element24, [1]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element24, [3]),1,1);
      var morph3 = dom.createMorphAt(element23,3,3);
      var morph4 = dom.createMorphAt(element23,4,4);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "loggedIn")], {}, child0, null);
      block(env, morph1, context, "if", [get(env, context, "selectedType")], {}, child1, child2);
      block(env, morph2, context, "each", [get(env, context, "projectTypes")], {"keyword": "type"}, child3, null);
      element(env, element25, context, "action", ["resetFilter"], {});
      block(env, morph3, context, "each", [get(env, context, "controller")], {"keyword": "project"}, child4, null);
      block(env, morph4, context, "if", [get(env, context, "noTypesFound")], {}, child5, null);
      return fragment;
    }
  };
}()));
//Main Instance of Ember Application
var attr = DS.attr;
var appPath = window.location.origin + window.location.pathname;

//Initialize Highlight.js for
//blog code syntax highlight
//hljs.initHighlightingOnLoad();

App = Ember.Application.create( {
    LOG_TRANSITIONS: true,
    rootElement: '#application'
} );

// Datastore configuration
App.ApplicationAdapter = DS.RESTAdapter.extend( {
    namespace: 'boomerweb/app/api'
} );

App.ApplicationStore = DS.Store.extend( {
    revision: 16,
    adapter: 'App.ApplicationAdapter'
} );

// Session authentification configuration
Ember.Application.initializer( {
    name: 'session',

    initialize: function ( container, application ) {

        App.Session = Ember.Object.extend( {
            init: function () {
                this._super();
                this.set( 'authToken', $.cookie( 'auth_token' ) );
                this.set( 'authAccountId', $.cookie( 'auth_account' ) );
            },

            authTokenChanged: function () {
                $.cookie( 'auth_token', this.get( 'authToken' ) );
            }.observes( 'authToken' ),

            authAccountIdChanged: function () {
                var authAccountId = this.get( 'authAccountId' );
                $.cookie( 'auth_account', authAccountId );
                if ( !Ember.isEmpty( authAccountId ) ) {
                    var store = App.__container__.lookup( 'store:main' );
                    this.set( 'authAccount', store.find( 'user', authAccountId ) );
                }
            }.observes( 'authAccountId' )
        } ).create();
    }
} );

Ember.$.ajaxPrefilter( function ( options, originalOptions, jqXHR ) {
    if ( !jqXHR.crossDomain ) {
        jqXHR.setRequestHeader( 'X-AUTHENTICATION-TOKEN',
            App.Session.get( 'authToken' ) );
    }
} );
// Helpers for HandleBars

Ember.Handlebars.helper( 'date-format', function( data ) {
    if ( !data ) {
        return '00:00:00';
    }
    var date = moment( new Date( data ) );
    return moment( date ).format( 'MMM Do YYYY [at] h:mm a' );
} );

Ember.Handlebars.helper( 'post-length', function( postText ) {
    var postLength = 0;
    var color = '#337ab7'; //light blue
    if ( postText ) {
        postLength = postText.length;
    }
    var currentLength = 255 - postLength;
    if ( currentLength < 0 ) {
        color = '#a94442'; // light red
    }
    return new Ember.Handlebars.SafeString( "<font color =" + color + ">"
        + "Characters: " + currentLength + '</font>' );
} );

Ember.Handlebars.helper( 'truncate', function( text, options ) {
    var limit = options.hash.limit || 50;
    if ( text.length < limit ) {
        return text;
    }
    text = text.substr( 0, limit - 3 ) + "...";
    return text;
} );

Ember.Handlebars.helper( 'formatted-text', function( text ) {
    return new Ember.Handlebars.SafeString(text);
} );
App.Router.map( function() {

    //Authentification Routes
    this.resource( 'login' );
    this.resource( 'logout' );

    this.resource( 'index', { path: '/' }, function() {
        //Page Display Routes
        this.resource( 'about' );
        this.resource( 'portfolio' );
        this.resource( 'blog' );
        this.resource( 'gameplayer' );
        this.resource( 'photomanager' );

        //Login Routes
        this.resource( 'addproject' );
        this.resource( 'addpost' );

        //Model Resource Routes
        this.resource( 'users', { path: "/users/:user_id" } );
        this.resource( 'posts', { path: "/posts/:post_id" } );
        this.resource( 'projects', { path: "/projects/:project_id" } );
        this.resource( 'contactforms' );
        this.resource( 'images' );

        //External API Resource Routes
        this.resource( 'tweets' );

        //404 Route
        this.resource( 'notfound', { path: '/*path' } );
    } );

} );
App.AuthentificationMixin = Ember.Mixin.create( {

    // Authenticate user before loading route
    beforeModel: function( controller, transition ) {
        var loggedIn = this.controllerFor( 'AuthentificationMixin' ).get( 'loggedIn' );
        if ( !loggedIn ) {
            return Ember.RSVP.reject( 'Unauthorized Access' );
        }
    },

} );

App.AuthentificationMixinController = Ember.Controller.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    moveFromPageIfLoggedOut: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.transitionToRoute( 'portfolio' );
        }
    }.observes( 'loggedIn' ).on( 'init' ),

} );
App.AboutRoute = Ember.Route.extend( {

    model: function() {
        return this.store.createRecord( 'contactform' );
    },

    actions: {
        refreshModel: function() {
            this.refresh();
            window.scrollTo( 0, 0 );
        }
    }

} );

App.AboutView = Ember.View.extend( {
    templateName: 'about'
} );

App.AboutController = Ember.Controller.extend( {

    verificationNumber: null,

    sendingMessage: false,

    humanVerification: function() {
        var verificationNumber = this.get( 'verificationNumber' );
        if ( verificationNumber === '8' ) {
            return true;
        }
        return false;
    }.property( 'verificationNumber' ),

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        sendContactRequest: function() {
            this.set( 'sendingMessage', true );
            this.get( 'model' ).save().then( function() {
                this.send( 'pushNotifications', 'Message Sent', false );
                this.set( 'sendingMessage', false );
                this.send( 'refreshModel' );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
                this.set( 'sendingMessage', false );
            }.bind( this ) );
        },

    }

} );
App.AddpostRoute = Ember.Route.extend( App.AuthentificationMixin, {

    model: function() {
        return this.store.createRecord( 'post' );
    },

    actions: {
        refreshRoute: function() {
            this.refresh();
        },

        willTransition: function() {
            controller = this.controllerFor( 'addpost' );
            controller.get( 'content' ).rollback();
        }
    }

} );

App.AddpostView = Ember.View.extend( {

    templateName: 'addpost'

} );

App.AddpostController = Ember.Controller.extend( {

    twitterPost: null,

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        cancel: function() {
            this.transitionToRoute( 'blog' );
        },

        createNew: function() {
            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'blog' );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Post Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        },

        createNewAndContinue: function() {
            this.get( 'model' ).save().then( function() {
                this.send( 'refreshRoute' );
                window.scrollTo( 0, 0 );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Post Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        },

        postToTwitter: function() {
            var text = this.get( 'twitterPost' );
            if ( !text ) {
                return;
            }
            var tagPost = text + ' #boomerweb';
            var tweet = this.store.createRecord( 'tweet' );
            tweet.set( 'text', tagPost );

            tweet.save().then( function() {
                this.send( 'pushNotifications', 'Tweet Posted', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        }

    }

} );
App.AddprojectRoute = Ember.Route.extend( App.AuthentificationMixin, {

    model: function() {
        return this.store.createRecord( 'project' );
    },

    actions: {

        refreshModel: function() {
            this.refresh();
        },

        willTransition: function() {
            controller = this.controllerFor( 'addproject' );
            controller.get( 'content' ).rollback();
        }
    }

} );

App.AddprojectView = Ember.View.extend( {
    templateName: 'addproject'

} );

App.AddprojectController = Ember.Controller.extend( {

    twitterPost: null,

    projectTypes: ['games', 'tools', 'software'],

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        selectType: function( type ) {
            this.set( 'model.type', type );
        },

        cancel: function() {
            this.transitionToRoute( 'portfolio' );
        },

        createNew: function() {
            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind(this) );
        },

        createNewAndContinue: function() {
            this.get( 'model' ).save().then( function() {
                this.send( 'refreshModel' );
                window.scrollTo( 0, 0 );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        },

        postToTwitter: function() {
            var text = this.get( 'twitterPost' );
            if ( !text ) {
                return;
            }
            var tagPost = text + ' #boomerweb';
            var tweet = this.store.createRecord( 'tweet' );
            tweet.set( 'text', tagPost );

            tweet.save().then( function() {
                this.send( 'pushNotifications', 'Tweet Posted', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        }
    }

} );
App.BlogRoute = Ember.Route.extend( {

    beforeModel: function() {
        // Reset the post limit to pull in the 
        // specified amount
        var controller = this.controllerFor( 'blog' );
        var postLimit = controller.get( 'postLimit' );
        controller.set( 'postIndex', postLimit );
    },

    model: function() {
        return this.store.find( 'post' );
    },

} );

App.BlogView = Ember.View.extend( {

    templateName: 'blog',

    didInsertElement: function() {
        console.log( 'NEW EVENT IN VIEW' );
        // From http://highlightjs.org/usage/ see Custom Initialization
        $( 'pre code' ).each( function( i, e ) {
            hljs.highlightBlock( e )
        } );
    }.on( 'click' ),

} );


App.BlogController = Ember.ArrayController.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    currentState: 'SAVED',

    loadingTweets: true,

    // Twitter Functions
    tweets: function() {
        return this.store.find( 'tweet' );
    }.property(),

    toggleTweetsLoaded: function() {
        this.set( 'loadingTweets', false );
    }.observes( 'tweets.[]' ),

    twitterPost: function() {
        return this.store.createRecord( 'tweet' );
    }.property(),

    destroyAndCreateNewTweet: function() {
        var tweet = this.get( 'twitterPost' );
        tweet.rollback();
        this.set( 'twitterPost', this.store.createRecord( 'tweet' ) );
    },

    // Blog Loading Properties
    cachedPosts: function() {
        return this.get( 'model' );
    },

    postLimit: 6,

    postIndex: 3,

    loadPosts: function() {
        var cache = this.get( 'content' ).content;
        var postLimit = this.get( 'postIndex' );
        var viewablePosts = Ember.A( [] );

        for ( var i = 0; i < postLimit; i++ ) {
            if ( i < cache.length ) {
                viewablePosts.pushObject( cache[i] );
            }
        }
        return viewablePosts;

    }.property( 'model.[]', 'postIndex' ),

    allPostsLoaded: function() {
        var postIndex = this.get( 'postIndex' );
        var cache = this.get( 'model' ).content.length;
        return postIndex > cache;
    }.property( 'postIndex' ),

    // Blog Editing Properties
    isEditing: false,

    isDeleting: false,

    formState: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.set( 'currentState', 'SAVED' );
        }
        switch ( this.get( 'currentState' ) ) {
            case 'EDITING':
                this.set( 'isEditing', true );
                break;
            case 'CANCELLED':
                this.set( 'isEditing', false );
            default:
                this.set( 'isEditing', false );
        }
    }.observes( 'currentState', 'loggedIn' ),

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        /**
         * General Form Actions
         */

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        toggleExpand: function( post ) {
            this.get( 'didInsertElement' );
            post.toggleProperty( 'expanded' );
        },

        postToTwitter: function() {
            var tweet = this.get( 'twitterPost' );

            tweet.save().then( function() {
                //Reload the model properly
                this.send( 'pushNotifications', 'Tweet Posted', false );
                this.destroyAndCreateNewTweet();
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
                this.destroyAndCreateNewTweet();
            }.bind( this ) );
        },

        loadMorePosts: function() {
            var postIndex = this.get( 'postIndex' );
            var cachedPosts = this.get( 'content' ).content;
            if ( postIndex > cachedPosts.length ) {
                return;
            }
            var setNewLimit = postIndex + this.get( 'postLimit' );
            this.set( 'postIndex', setNewLimit );
        },

        /**
         * Form Edit Actions
         */

        editState: function() {
            this.set( 'currentState', 'EDITING' );
        },

        savedState: function() {
            this.set( 'currentState', 'SAVED' );
        },

        cancelState: function() {
            this.get( 'model' ).forEach( function( model ) {
                model.rollback();
            } );
            this.set( 'currentState', 'CANCELLED' );
        },

        saveEdits: function() {
            var models = this.get( 'model' );
            var saveModels = [];

            models.forEach( function( post ) {
                saveModels.push( post.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function() {
                this.transitionToRoute( 'blog' );
                this.send( 'pushNotifications', 'Posts Saved', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Save Posts', true );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

        deleteModel: function( post ) {
            post.set( 'enableDelete', true );
        },

        cancelDelete: function( post ) {
            post.set( 'enableDelete', false );
        },

        confirmDelete: function( post ) {
            post.destroyRecord().then( function() {
                this.send( 'pushNotifications', 'Post Deleted', false );
            }.bind( this ), function( response ) {
                this.send( 'pushNotifications', 'Failed To Delete Post', true );
            }.bind( this ) );
        },

    }

} );
App.GameplayerRoute = Ember.Route.extend( {

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
App.IndexRoute = Ember.Route.extend( {

    actions: {

        beforeModel: function() {
            this.transitionTo( 'portfolio' );
        },

        pushNotifications: function( message, error ) {
            var controller = this.controllerFor( 'index' );
            controller.pushNotification( message, error );
        },

        willTransition: function( transition ) {
            var currentTransition = transition.targetName;
            if ( currentTransition === 'index.index' ) {
                this.transitionTo( 'portfolio' );
            }
        },

        error: function( error, transition ) {
            this.transitionTo( '/notfound' );
        }

    }
} );

App.IndexView = Ember.View.extend( {
    templateName: 'index',

    toggleModal: function() {
        this.$( '.modal' ).modal( 'hide' );
    }.observes( 'controller.modalLogin' ),

} );

App.IndexController = Ember.Controller.extend( {

    // Login functions
    modalLogin: false,

    loggedIn: function() {
        return App.Session.get( 'authToken' );
    }.property( 'App.Session.authToken' ),

    // Notification functions
    notification: Ember.Object.extend( {
        title: null,
        message: null,
        error: false,
    } ),

    currentNotifications: [],

    //Don't Call Directly, Use Route.Send to activate
    pushNotification: function( message, error ) {
        var currentNotifications = this.get( 'currentNotifications' );
        var notification = new this.notification;
        var test = error ? 'Failure' : 'Success';

        notification.setProperties( {
            title: test,
            message: message,
            error: error,
        } );
        currentNotifications.pushObject( notification );
    },

    actions: {

        // Login Actions
        showModalLogin: function() {
            this.set( 'modalLogin', true );
        },

        hideModalLogin: function() {
            this.set( 'modalLogin', false );
        },

        login: function() {
            var self = this;
            var data = this.getProperties( 'email', 'password' );
            if ( !Ember.isEmpty( data.email ) &&
                !Ember.isEmpty( data.password ) ) {
                var postData = {
                    session: {
                        email: data.email,
                        password: data.password
                    }
                };
                $.post( appPath + 'login', postData ).done( function( response ) {
                    var sessionData = ( response.session || {} );
                    App.Session.setProperties( {
                        authToken: sessionData.auth_token,
                        authAccountId: sessionData.account_id
                    } );
                    var attemptedTransition = App.Session.get( 'attemptedTransition' );
                    if ( attemptedTransition ) {
                        attemptedTransition.retry();
                        App.Session.set( 'attemptedTransition', null );
                    }
                    self.send( 'hideModalLogin' );
                    self.send( 'pushNotifications',
                        'You Have Successfully Logged In', false );
                } );
            }
        },

        logout: function() {
            var self = this;
            $.ajax( {
                url: appPath + 'logout',
                type: 'POST'
            } ).always( function( response ) {
                App.Session.setProperties( {
                    authToken: '',
                    authAccountId: ''
                } );
            } );
            self.send( 'pushNotifications',
                'You Have Been Logged Out', false );
        }
    }

} );

Ember.WYSIWYG = Ember.TextArea.extend( {

    renderEditor: function() {
        var _this = this;

        _this.$().trumbowyg( {
            btns: ['viewHTML',
              '|', 'formatting',
              '|', 'btnGrp-design',
              '|', 'link',
              '|', 'btnGrp-justify',
              '|', 'btnGrp-lists',
              '|', 'horizontalRule']

        } ).on( 'tbwfocus tbwchange twbpaste cut', function() {
            setTimeout( function() {
                if ( _this ) {
                    _this.set( 'value', $( '.trumbowyg-editor' ).html() );
                }
            }, 100 );
        } );
    }.on( 'didInsertElement' ),

} );

Ember.Handlebars.helper( 'text-editor', Ember.WYSIWYG );

App.Contactform = DS.Model.extend( {

    name: attr( 'string' ),
    email: attr( 'string' ),
    message: attr( )

} );

App.Image = DS.Model.extend( {

    name: attr( 'string' ),
    image_url: attr( 'string' ),
    image_size: attr( 'string' )

} );

App.Post = DS.Model.extend( {

    title: attr( 'string' ),
    image: attr( 'string' ),
    post_body: attr( 'string' ),
    author: attr('string'),
    created_at: attr(),

    enableDelete: false,
    expanded: false,

} );

App.Project = DS.Model.extend( {

    type: attr(),
    name: attr(),
    subheading: attr(),
    image: attr(),
    description: attr(),
    project_link: attr(),
    code_link: attr(),
    updated_at: attr(),

    enableDelete: false,
    typeFilter: true
} );
App.Tweet = DS.Model.extend( {

    text: attr( ),
    created_at: attr(),
    user: attr()

} );
App.User = DS.Model.extend( {

    email: attr( 'string' ),
    password: attr( 'string' ),
    rememberToken: attr( 'string' ),
    created_at: attr()

} );
App.Notfound = Ember.Route.extend( { } );

App.Notfound = Ember.View.extend( {
    templateName: 'notfound'
} );

App.Notfound = Ember.Controller.extend( { } );
App.PhotomanagerRoute = Ember.Route.extend( App.AuthentificationMixin, {

    model: function() {
        return this.store.find( 'image' );
    },

    actions: {

        refreshImages: function() {
            this.refresh();
            window.scrollTo( 0, 0 );
        }

    }

} );

App.PhotomanagerView = Ember.View.extend( {

    templateName: 'Photomanager',

    DragDrop: DropletView.extend()

} );

App.PhotomanagerController = Ember.Controller.extend( DropletController, {

    mimeTypes: ['image/bmp'],

    concatenatedProperties: ['mimeTypes'],

    dropletUrl: 'api/images',

    selectedImage: null,

    loadingImages: true,

    dropletOptions: {
        fileSizeHeader: true,
    },

    imagesLoaded: function() {
        this.set( 'loadingImages', false );
    }.observes( 'model' ),

    didUploadFiles: function didUploadFiles( response ) {
        this.send( 'refreshImages' );
        this.send( 'pushNotifications', 'Image Added', false );
    },

    actions: {

        deleteImage: function( image ) {
            var imageUrl = image.get( 'name' );
            image.destroyRecord().then( function() {
                $.ajax( {
                    context: this,
                    url: 'api/images',
                    type: 'DELETE',
                    data: { image_url: imageUrl },
                    success: function( result ) {
                        this.send( 'pushNotifications', 'Image Deleted', false );
                    }
                } );
            }.bind( this ) );
        },

        selectImage: function( image ) {
            this.set( 'selectedImage', image );
        }

    }

} );
App.PortfolioRoute = Ember.Route.extend( {
    model: function() {
        return this.store.find( 'project' );
    }
} );

App.PortfolioView = Ember.View.extend( {

    templateName: 'portfolio',

} );

App.PortfolioController = Ember.ArrayController.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    sortProperties: ['updated_at'],

    projectTypes: ['games', 'tools', 'software'],

    sortAscending: false,

    selectedType: null,

    noTypesFound: false,

    currentState: 'SAVED',

    isEditing: false,

    formState: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.set( 'currentState', 'SAVED' );
        }
        switch ( this.get( 'currentState' ) ) {
            case 'EDITING':
                this.set( 'isEditing', true );
                break;
            case 'CANCELLED':
                this.set( 'isEditing', false );
            default:
                this.set( 'isEditing', false );
        }
    }.observes( 'currentState', 'loggedIn' ),

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    actions: {

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        editState: function() {
            this.set( 'currentState', 'EDITING' );
        },

        savedState: function() {
            this.set( 'currentState', 'SAVED' );
        },

        cancelState: function() {
            this.get( 'model' ).forEach( function( model ) {
                model.rollback();
            } );
            this.set( 'currentState', 'CANCELLED' );
        },

        saveEdits: function() {
            var models = this.get( 'model' );
            var saveModels = [];

            models.forEach( function( project ) {
                saveModels.push( project.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'pushNotifications', 'Projects Saved', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Save Projects', true );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

        deleteModel: function( project ) {
            project.set( 'enableDelete', true );
        },

        cancelDelete: function( project ) {
            project.set( 'enableDelete', false );
        },

        confirmDelete: function( project ) {
            project.destroyRecord().then( function() {
                this.send( 'pushNotifications', 'Post Deleted', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Delete Post', true );
            }.bind( this ) );
        },

        resetFilter: function() {
            this.get( 'content' ).forEach( function( project ) {
                project.set( 'typeFilter', true );
            } );
            this.set( 'selectedType', null );
            this.set( 'noTypesFound', false );
        },

        editProjectType: function( project, type ) {
            project.set( 'type', type );
        },

        sortProjectByType: function( type ) {
            var projects = this.get( 'content' );
            var typesFound = true;

            projects.forEach( function( project ) {
                var typeArray = project.get( 'type' ).split( "," );
                if ( typeArray.indexOf( type ) > -1 ) {
                    project.set( 'typeFilter', true );
                    typesFound = false;
                } else {
                    project.set( 'typeFilter', false );
                }
            } );
            this.set( 'noTypesFound', typesFound );
            this.set( 'selectedType', type )
        },

    }

} );