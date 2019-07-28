**Real time content updater for react**

Wrap your state variable using V_


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
   
   
![](https://gifyu.com/image/EogT)

