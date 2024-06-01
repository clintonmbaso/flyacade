   var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
   function searchPage(features)
   {
      var element = document.getElementById('SiteSearch');
      window.open('sitesearch-results.html?q='+encodeURIComponent(element.value), '', features);
      return false;
   }