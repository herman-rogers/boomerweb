from django.conf.urls.defaults import patterns, include, url
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
import oembed
admin.autodiscover()
oembed.autodiscover()

urlpatterns = patterns('',
    ('http://damp-meadow-7987.herokuapp.com/homepage/$', 'TheoryWeb.views.homepage'),
    (r'^research/$', 'TheoryWeb.views.research'),
    url(r'^blog/', include('blog.urls')),
    (r'^resume/$', 'TheoryWeb.views.resume'),

    # Examples:
    # url(r'^$', 'TheoryWeb.views.home', name='home'),
    # url(r'^TheoryWeb/', include('TheoryWeb.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

     url(r'^admin/', include(admin.site.urls)),
)

#if settings.DEBUG:
#        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#        urlpatterns += staticfiles_urlpatters()
