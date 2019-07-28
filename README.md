Real time content updater for react

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
   
   url: url that need to fetch data (default value)
   
   this_scope: pass `this` key word (default value)
   
   default: default value in need to return (optional)
   
   time: call api end point with this time interval. if it is not defined call only when component render.
   
   


