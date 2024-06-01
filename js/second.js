   document.addEventListener('DOMContentLoaded', function(event)
   {
      var Slidehead = new bootstrap.Carousel('#Slidehead', {interval: 10000, pause: false});
      var photoServicesCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_photoServicesCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover photoServicesCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
      var missionCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_missionCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover missionCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
      var goalCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_goalCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover goalCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
      var visionCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_visionCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover visionCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
   });