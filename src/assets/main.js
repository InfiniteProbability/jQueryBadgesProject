$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/glenrswanson.json',
    dataType: 'jsonp',
    success: function(response){
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {
    var $badges = $('#badges');

    courses=sortCourses(courses);


    courses.forEach(function(course){
      var $course = $('<div />', {
        'class':'course'
      }).appendTo($badges);

      $('<h3 />',{
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    })
  };

  function sortCourses(courses) {
    courses.sort(function (a,b) {
      if (a.title.toLowerCase < b.title.toLowerCase)
        return -1;
      if (a.title.toLowerCase > b.title.toLowerCase)
        return 1;
      return 0;
    });
    return courses;
  };
});
