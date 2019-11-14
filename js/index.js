$('#search').click(function(){
  $('ul').hide();
  let cityname = $('#input').val();
  let key = '10c213578f42636af4a2757fb63b28a1';

  $.ajax({
    async:false,
    url: 'http://v.juhe.cn/weather/index',
    type: 'get',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'response',
    data: {
      cityname,
      key
    },
  
    success: function(_data) {
      let today = _data.result.today; 
      let city = today.city;
      let temp = today.temperature;
      let weather = today.weather;
      $('#city')[0].innerText = city;
      $('#temp')[0].innerText = temp;
      $('#weather')[0].innerText = weather;
    }
  })
})

