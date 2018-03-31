
$(function () {

	var api_key = "fc89915741cbc737bd3188d3c6846b80";
	var api_url = "http://api.openweathermap.org/data/2.5/forecast"
	var query = api_url + "?q=kagoshima-shi,jp&APPID=" + api_key;

	var dt = new Date()

	$.ajax({
		type: "get",
		url: query,
		dataType: "json",
		success: function (data, dataType) {

			var arr = new Array();
      for (  var t = 0;  t < 33;  t=t+8 ) {
        arr.push(new Date(data.list[t].dt_txt) )  	
      }
			//console.log(data);
      console.log(data.list[0].weather[0].main);
      // console.log(data.list[8].weather[0].main);
      // console.log(data.list[16].weather[0].main);
      // console.log(data.list[24].weather[0].main);

      var rain = "<i class=\"fas fa-umbrella\"></i>";
      var cloud = "<i class=\"fas fa-cloud\"></i>";
      var clear = "<i class=\"fas fa-sun\"></i>";

      function icon(x) {
        console.log(x)
        if(x=="Rain")return rain;
        if(x=="Clouds")return cloud;
        if(x=="Clear")return clear;
        return "error";
      }
      
      // function loop(dayday){
      //   for(t=0; t<5; t++){
      //     var r = r + "</th><th>" + (arr[t].getMonth() + 1) + "月" + (arr[t].getDate()) + "日";
      //   }
      //   return r
      // }
      
			// $("#weatherList").append(
      //   "<tr><th>サイト"+ loop +"</th></tr>"
      // )
      
      for(t=0; t<5; t++){
        $("#dates").append( "<th>" + (arr[t].getMonth() + 1) + "月" + (arr[t].getDate()) + "日" + "</th>");
      }

      for(s=0; s<33; s=s+8){
        $("#openweatherlist").append("<td>" + icon(data.list[s].weather[0].main) + "</td>");
      }
			// $("#openweatherlist").append(
      //   `<tr> 
      //     <td>openweather</td>
      //     <td>${icon(data.list[0].weather[0].main)}  </td>
      //     <td>${icon(data.list[8].weather[0].main)}  </td>
      //     <td>${icon(data.list[16].weather[0].main)} </td>
      //     <td>${icon(data.list[24].weather[0].main)} </td>
      //     <td>${icon(data.list[32].weather[0].main)} </td>
      //   </tr> `
      // );
      console.log(icon(data.list[0].weather[0].main));

		}
	});

});