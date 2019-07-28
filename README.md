#### **Real time content updater for react**

Just only need wrap your state variable using V-comet
 
 You can use any place in component, but we recommended initializing inside the componentDidMount method
 and make sure to pass state variable with `' '` or `" "`
 
 `V_('this.state.title', object);`
 
 **Example code:**

``` 



     let object = {
       url: 'http://worldtimeapi.org/api/ip',
       this_scope: this,
       default: "",
       time:3000
     };
     V_('this.state.title', object);
     
     

   ```
   
   **url:** url that need to fetch data (_default value_)
   
   **this_scope:** pass `this` key word (_default value_)
   
   **default:** default value in need to return (_optional_)
   
   **time:** call api end point with this time interval. if it is not defined call only when component render. (_optional_)
   
   
   **_Using with react app for showing real time clock_**
   
![](https://s3.gifyu.com/images/v_comet_gif.gif)





