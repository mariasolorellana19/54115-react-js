const Destacados = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
              <div class="card">
                <img src={"imagen/leonas_2_0.jpg"} class="card-img-top" alt="leonas"/>
                 <div class="card-body">
                 <p class="card-text">Especialización en Nutrición Deportiva</p>
               </div>
             </div>
           </div>
           <div className="col-md-4"> 
              <div class="card">
                <img src={"imagen/Corner-Corto-en-Defensa-.jpeg"} class="card-img-top" alt="leonas"/>
                <div class="card-body">
                <p class="card-text">Especialización en Corner Corto Defensivo</p>
                 </div>
               </div>
            </div>
            <div className="col-md-4"> 
            <div class="card">
                <img src={"imagen/leones.jpg.webp"} class="card-img-top" alt="leonas"/>
                <div class="card-body">
                <p class="card-text">Especialización en Tecnologia y Análisis</p>
                </div>
              </div>
            </div>  
          </div>      
       </div>
        
    )
}

export default Destacados;
