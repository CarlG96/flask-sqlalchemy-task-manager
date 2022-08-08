document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    //datepicker initialisation
    let datePicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePicker, {
      date: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    //select dropdown initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });

