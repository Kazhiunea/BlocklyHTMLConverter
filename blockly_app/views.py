from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, Template

def index(request):
    saved_xml = request.session.get('saved_xml', '')
    return render(request, 'blockly_app/index.html', {'saved_xml': saved_xml})

def homepage(request):
    return render(request, 'homepage.html')

def generated_page(request):
    if request.method == 'POST':
        request.session['saved_xml'] = request.POST.get('saved_xml', '')
        generated_code = request.POST.get('generated_code', '')
        generated_template = Template(generated_code)
        return HttpResponse(generated_template.render(RequestContext(request)))

def workspace(request):
    saved_xml = request.session.get('saved_xml', '')
    return render(request, 'blockly_app/index.html', {'saved_xml': saved_xml})

def html_generator(request):
    return render(request, 'blockly_app/html_generator.html')

def test_page(request):
    return render(request, 'blockly_app/test_page.html')