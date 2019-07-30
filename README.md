# **Real time content updater for React JS**

###### Just only need wrap your state variable using V-comet
 
 _You can use any place in component, but we recommended initializing inside the componentDidMount method
 and make sure to pass state variable with `' '` or `" "`_
 
 `V_('this.state.title', object);`
 
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
   
   
   **_Using with react app for showing real time clock_**
   
![](https://s3.gifyu.com/images/v_comet_gif.gif)







