const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=30.050,31.250'

// key of url --< url
// url --> url:url
// Parse manually
// request({url},(error,response)=>{
//     // console.log(response)
//     // json
//     console.log(response.body)
//     // error bec.json
//     // console.log(response.body.location.name)
//     const data = JSON.parse(response.body)
//     console.log(data)
//     console.log(data.location.name)
// })

// console.log('test')

/////////////////////////////////////////////////////////////////////////////////
// Parse automatically
// request({url,json:true},(error,response)=>{
//     // low level error (Intenet connection/request api)
//     if(error){
//         console.log('Error Has occurred')
//     }
//     else if(response.body.error){
//         console.log(response.body.error.type)
//     }
//     else{
//         console.log('In ' + response.body.location.country + ' It is now ' + response.body.current.temperature)
//     }

// })

////////////////////////////////////////////////////////////////////////////////

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log('Error has occcurred')
//     }
//        else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if (response.body.features.length == 0){
//         console.log('Your search is wrong')
//     }
 
//     else {
//         const longtitiude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longtitiude,latitude)
//     }
// })

//////////////////////////////////////////////////////////////////////////////

// forecast

// const forecast = (latitude,longtitiude,callback)=>{
//     const url = 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=' + latitude + ',' + longtitiude
// // const url = 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=' + 29.23423 + ',' + 26.232312
// // 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=29.3231,213122'
//     request({url,json:true},(error,response)=>{
//     // low level error (Intenet connection/request api)
//     if(error){
//        callback('Unable to connect weather service',undefined)
//     }
//     else if(response.body.error){
//       callback('Unable to find location',undefined)
//     }
//     else{
//        callback(undefined,response.body.current.weather_descriptions[0] + ' It is now ' + response.body.current.temperature)
//     }

// })
// }

// const foreCastCallback = (error,data)=>{
//     if(error){
//         console.log('Error ' , error)  
//       }
//       else {
//            console.log('Data ' , data)
//       }
// }

// forecast(12.6463610364431,42.5041539170675,foreCastCallback)

/////////////////////////////////////////////////////////////////////////////

// const forecast = require('./tools/forcast')
// forecast(29.871903452398,26.4941838299718,(error,data)=>{
//     if(error){
//       console.log('Error ' , error)  
//     }
//     else {
//          console.log('Data ' , data)
//     }
// })

//////////////////////////////////////////////////////////////////////////////////


// const geocode = (address,callback) => {
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         callback('Unable to connect location service',undefined)
//     }
//     else if(response.body.message){
//        callback(response.body.message,undefined)
//     }
//     else if (response.body.features.length == 0){
//         callback('Unable to find location .. Try again',undefined)
//     }
 
//     else {
//         callback(undefined,{
//             latitude:response.body.features[0].center[0],
//             longtitude:response.body.features[0].center[1],
//             location:response.body.features[0].place_name
//         })
//     }
// })
// }
// forEach((el)=>{})
// const geocode = require('./tools/geocode')
// geocode('Egypt',(error,data)=>{
//     if(error){
//         console.log('Error ' , error)  
//       }
//       else {
//            console.log('Data ' , data)
//       }
// })

/////////////////////////////////////////////////////////////////////////////////

// Version 1
const forecast = require('./tools/forcast')
const geocode = require('./tools/geocode')


// geocode('India',(error,data)=>{
//     if(error){
//         console.log('Error ' , error)  
//       }
//       else {
//            console.log('Data ' , data)
//            forecast(data.latitude,data.longtitude,(error,data)=>{
//             if(error){
//               console.log('Error ' , error)  
//             }
//             else {
//                  console.log('Data ' , data)
//             }
//         })
//       }
// })

//////////////////////////////////////////////////////////////////////////////

// Version 2
console.log(process.argv)
const country = process.argv[2]
geocode(country,(error,data)=>{
    if(error){
        console.log('Error ' , error)  
      }
      else {
           console.log('Data ' , data)
           forecast(data.latitude,data.longtitude,(error,data)=>{
            if(error){
              console.log('Error ' , error)  
            }
            else {
                 console.log('Data ' , data)
            }
        })
      }
})
