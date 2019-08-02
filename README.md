#**V_Comet**
**Real time content updater for React-JS and Angular**


###### Just only need wrap your state variable using V-comet
 
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
   
   **url:** url that need to fetch data (_default value_)
   
   **this_scope:** pass `this` key word (_default value_)
   
   **default:** default value in need to return (_optional_)
   
   _We recommend to use default value , if any error return V_comet set default value to state variable. Make sure to pass default value
   as valid type. In this example api call return value as json type with datetime key, so we set default value as the same as return type._
   
   **time:** call api end point with this time interval. If it is not defined call only when component render. (_Optional_)
   
   **return:** you can pass your custom method as object key value to v_comet. v_comet will pass response to this method as argument and set state variable 
   in react app with return value of this method. Make sure to create custom method to pass argument and return valid data. This is very helpful if you try 
   get data from innerHTML value in response html.
   
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
   
   **_Using with react app for showing real time clock_**
   
![](https://s3.gifyu.com/images/v_comet_gif.gif)









