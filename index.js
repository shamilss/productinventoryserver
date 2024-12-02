const jsonServer=require('json-server')

const productInventoryServer=jsonServer.create()

const middleware=jsonServer.defaults()

const router=jsonServer.router('db.json')

productInventoryServer.use(middleware)
productInventoryServer.use(router)

const PORT=5000 || process.env.PORT

productInventoryServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at port ${PORT} `);
    
})