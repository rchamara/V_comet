#**V_Comet**
## [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) [![Known Vulnerabilities](https://snyk.io//test/github/rchamara/V_comet/badge.svg?targetFile=package.json)](https://snyk.io//test/github/rchamara/V_comet?targetFile=package.json)

**Real time content updater for React-JS and Angular**


## **How to install**
```
    npm install v_comet
```

or

```
    npm i v_comet
```



## **How to use**

###### Just only need wrap your state variable using v-comet
 
 _You can use any place in component, but we recommended initializing inside the componentDidMount method in react or ngAfterViewInit
 in angular and make sure to pass state variable with `' '` or `" "` in react. In angular just use variable with this keyword._
 
 ```
 import { V_ } from 'v_comet';
 
 /**
    title is the variable that need to change.
 */
 
 V_('this.state.title', object); /** in react */
 
 V_('this.title', object); /** in angular */
 
 ```
 
### **Example code:**

``` 



     let object = {
       url: 'http://worldtimeapi.org/api/ip',
       this_scope: this,
       default: {datetime: 'default value'},
       time:3000
     };
     V_('this.state.title', object);
     
     

   ```
   
   **url :** url that need to fetch data (_default value_)
   
   **this_scope :** pass `this` key word (_default value_)
   
   **default :** default value in need to return (_optional_)
   
   _We recommend to use default value , if any error return V_comet set default value to state variable. Make sure to pass default value
   as valid type. In this example api call return value as json type with datetime key, so we set default value as the same as return type._
   
   **time :** call api end point with this time interval. If it is not defined call only when component render. (_Optional_)
   
   **return :** you can pass your custom method as object key value to v_comet. v_comet will pass response to this method as argument and set state variable 
   in react app with return value of this method. Make sure to create custom method to pass argument and return valid data. This is very helpful if you try 
   get data from innerHTML value in response html.
   
   **config :** config is used to pass user defined  fetch api properties. this is optional variable, if this is not initialized fetch api used
   default value. config must be pass as object.object keys are same as fetch api in javascript. for more detail follow relevant documentation in 
   fetch api
   
   Example:
   
   ```
         let fetch_config = {
             credentials: 'same-origin', // 'include', default: 'omit'
             method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
             body: JSON.stringify({name: 'V_comet'}), // Coordinate the body type with 'Content-Type'
             headers: new Headers({
                 'Content-Type': 'application/json'
             }),
         };
   
   ```
   
   Pass fetch properties to object as value of config key
   
   ```
   
         let fetch_config = {
             credentials: 'same-origin', // 'include', default: 'omit'
             method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
             body: JSON.stringify({name: 'V_comet'}), // Coordinate the body type with 'Content-Type'
             headers: new Headers({
                 'Content-Type': 'application/json'
             }),
         };
   
         let object = {
             url: 'http://worldtimeapi.org/api/ip',
             this_scope: this,
             default: {datetime: 'default value'},
             time:10000,
             return: this.customMethod,
             config: fetch_config
         };
   
   
         V_('this.state.title', object);
   
   ```
   
   Here is how to use return option:
   
   ```
         let object = {
             url: 'http://worldtimeapi.org/api/ip',
             this_scope: this,
             default: {datetime: 'default value'},
             time:10000,
             return: this.customMethod
         };
         V_('this.state.title', object);
         
         customMethod(_Object) {
             return {datetime: 'custom method return value'};
         }
   
   ``` 
   
## **Demo**
   
   **_Using with react app for showing real time clock_**
   
![](https://s3.gifyu.com/images/v_comet_gif.gif)

## **Author**

Ruwan Chamara         
          [Github](https://github.com/rchamara)
          
## **Contributing**

Contributions,issues and features request are welcome !
Feel free to check [issues page](https://github.com/rchamara/V_comet/issues)

## **License**

ISC License

Copyright (c) 2019, ruwan chamara (chamara19911218@gmail.com)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

_THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE._
  










