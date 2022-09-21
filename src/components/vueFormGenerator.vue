<template >
    <div v-show = '!isTrue'>
        <FormKit type="group" id = "hobbiton">
    <FormKit
      name="email"
      type="email"
      label="Email"
      placeholder="example@gmail.com"
      help="Enter your email address."
      :delay="1000"
      validation="required|length:5|email"
      validation-visibility="live"
    />
  
  </FormKit>

  <FormKit type="group">
  <FormKit
    type="password"
    name="password"
    value="super-secret"
    label="Password"
    help="Enter your password"
    validation="required"
    validation-visibility="live"
  />
  </FormKit>

  <FormKit
  
    type="button" >
    <a onclick = 'isTrue = !isTrue' href='./vueFormulate.vue'>Login</a> 
    
  </FormKit>
 

</div>
</template>




<style>
    body{
        padding: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
   
    [data-invalid] .formkit-inner {
          border-color: red;
          box-shadow: 0 0 0 1px red;
     }
     .formkit-outer{
        padding: 10px;
     }

    [data-complete] .formkit-inner {
          border-color: red;
          box-shadow: 0 0 0 1px green;
    }
    [data-complete] .formkit-inner::after {
        content: '✅';
        display: block;
        padding: 0.5em;
}
</style>
<script>

</script>
