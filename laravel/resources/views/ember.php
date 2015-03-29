<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GweithdyEmber</title>
  </head>
  <body>
      <h1> Gweithdy App </h1>
      <script type='text/x-handlebars'>
          <li>{{#link-to ''}}Blog{{/link-to}}</li>
          <li>{{#link-to 'about'}}About{{/link-to}}</li>
          <li>{{#link-to 'blog'}}Blog{{/link-to}}</li>
          {{outlet}}
      </script>
      <script type='text/x-handlebars' id='about'>
          <h1>About</h1>
          {{outlet}}
      </script>
      
      <script type='text/x-handlebars' id='blog'>
          <h1>Blog</h1>
          {{outlet}}
      </script>
      
      <script src='../bower_components/jquery/dist/jquery.js'></script>
      <script src='../bower_components/ember/ember-template-compiler.js'</script>
      <script src='../bower_components/handlebars/handlebars.js'></script>
      <script src='../bower_components/ember/ember.debug.js'></script>
      <script src='../bower_components/ember-data/ember-data.js'></script>
      <script src='../app/dist/js/gweithdybuild.js'></script>
  </body>
</html>