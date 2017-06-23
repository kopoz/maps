from django.shortcuts import render
from django.template import RequestContext
from gmaps.models import UbicacionForm


def index(request):
    return render(request, 'index.html')# , {'form': form})

# def coords_save(request):
    # """Method POST to save the selected marker"""
    # if request.method == 'POST':
        # form = UbicacionForm("banana")
    
