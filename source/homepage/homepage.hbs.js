﻿var homepage = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Workshop";
  },"3":function(depth0,helpers,partials,data) {
  return "About";
  },"5":function(depth0,helpers,partials,data) {
  return "Blog";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "﻿<h1> Gweithdy App </h1>\r\n<!--<script type='text/x-handlebars'>-->\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "", {"name":"link-to","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "about", {"name":"link-to","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "blog", {"name":"link-to","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n    "
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n<!--</script>-->\r\n\r\n<!--<script>\r\n\r\nvar HomePageView = Ember.View.extend( {\r\n    template: Ember.TEMPLATES.App.homepage\r\n} );\r\n\r\n</script>-->";
},"useData":true});