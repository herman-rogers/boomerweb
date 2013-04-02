from django.shortcuts import render_to_response
from django.http import HttpResponse
import datetime
    
def homepage(request):
    now = datetime.datetime.now()
    return render_to_response('homepage.html', {'current_date': now})

def resume(request):
    now = datetime.datetime.now()
    return render_to_response('resume.html', {'current_date': now})
    
def research(request):
    now = datetime.datetime.now()
    return render_to_response('research.html', {'current_date': now})

#def hours_ahead(request, offset):
#    try:
#        offset = int(offset)
#    except ValueError:
#        raise Http404()
#    dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
#    html = "<html><body>In %s hour(s), it will be %s.</body></html>" % (offset, dt)
#    return HttpResponse(html)
