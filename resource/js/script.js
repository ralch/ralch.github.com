$(document.links).filter(function() {
    return !this.hostname.endsWith('phogolabs.com')
}).attr('target', '_blank');
