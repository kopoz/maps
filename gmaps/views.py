from django.shortcuts import render
from django.template import RequestContext
from gmaps.models import UbicacionForm


def index(request):
    form = UbicacionForm("banana")
    return render(request, 'index.html', {'form': form})

def coords_save():
    """Method POST to save the selected marker"""
    pass
    
