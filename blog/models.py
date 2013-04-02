from django.db import models
from taggit.managers import TaggableManager
from django.contrib import admin

class Post(models.Model):
    title = models.CharField(max_length=60)
    body = models.TextField()
    created = models.DateTimeField()
    tags = TaggableManager()
#    thumbnail = models.ForeignKey(Photo, related_name ='blogs')
    
    def __unicode__(self):
        return self.title

class PostAdmin(admin.ModelAdmin):
    search_fields = ["title"]
