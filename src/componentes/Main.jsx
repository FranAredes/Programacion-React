import React from 'react'
import cbomba from '../assets/img/cbomba.jpg'
import espaldagym from '../assets/img/espaldagym.jpg'
import trentwis from '../assets/img/trentwis.jpg'
import creatina from '../assets/img/creatina.png'
import proteina from '../assets/img/proteina.jpg'
import preentreno from '../assets/img/preentreno.jpg'
import creatina2 from '../assets/img/creatina2.jpg'
import proteina2 from '../assets/img/proteina2.jpg'
import preentreno2 from '../assets/img/preentreno2.jpg'
import pecho from '../assets/img/pecho.jpg'
import espalda  from '../assets/img/espalda.jpg'
import pierna from '../assets/img/pierna.jpg'
import biceps from '../assets/img/biceps.jpg'
import triceps from '../assets/img/triceps.jpg'
import hombro from '../assets/img/hombro.jpg'

import GymInscriptionForm from './GymInscriptionForm'


import {Link} from 'react-scroll'




function Main() {
  return (

    <body>
      
      <>
      <header>
    <h1 className='titulo'>GYM CENTER</h1>
    <nav>
    <div className='links'>
       <a href="#">INICIO</a>
       <Link to='suplemen' spy={true} smooth={true} offset={50} duration={500}>SUPLEMENTOS</Link>
       <Link to='ruti' spy={true} smooth={true} offset={50} duration={500}>RUTINAS</Link>
    </div>
    </nav>
     
    </header> 
    </>


  

    <div className='main'></div>

    <div className='fotos'>
  	<div class="espacio">
		<div>  
        <img className='img1' src={cbomba} />                           
		</div>

		</div>
	  <div class="espacio">
		
		<div>
				<img className='img2' src={espaldagym}/>       
		</div>			 	
		</div>
    <div class="espacio">
		
		<div>
       <img className='img3' src={trentwis}/>
		</div>
		
		</div>
    </div>
    <div>


   <div> 
    <h1 className='suplemen'>SUPLEMENTOS</h1>
   </div>
       

    <div className='fotos'>
  	<div class="espacio">
		<div>  
    <p className='titulosuple'>CREATINA:</p>
    <p>Star Nutrition</p> 
      <img className='img1' src={creatina} />   
      <p>$11.200</p>
      <p>Componente principal:</p>
      <p>Creatina.</p>
      <p>Tamaño de la porción:</p>
      <p>5g.</p>
      <p>Porciones por envase:</p>
      <p>60.</p>
                          
		</div>

		</div>
	  <div class="espacio">
		
		<div>
      <p className='titulosuple'>PROTEINA:</p>
      <p>Whey x-pro</p>
				<img className='imgprote' src={proteina}/>  
        <p>$12.500</p>
      <p>Componente principal:</p>
      <p> aminoácidos.</p>
      <p>Tamaño de la porción:</p>
      <p> cada medida aporta </p>
      <p>24 grs.</p>
          
		</div>			 	
		</div>
    <div class="espacio">
		
		<div>
      <p className='titulosuple'>PRE ENTRENO:</p>
      <p >Cellucor C4</p>
       <img className='imgpre' src={preentreno}/>
       <p>$5.500</p>
      <p>Componentes:</p>
      <p>creatina,polidextrosa.</p>
      <p>Peso del Product:</p>
      <p>195gr. </p>
      <p></p>
		</div>
		
		</div>
    </div>
   
   



    </div>

    <div className='fotos'>
  	<div class="espacio">
		<div>  
    <p className='titulosuple'>CREATINA:</p>
    <p>My Protein</p> 
      <img className='img1' src={creatina2} />   
      <p>$10.000</p>
      <p>Componente principal:</p>
      <p>Creatina.</p>
      <p>Tamaño de la porción:</p>
      <p>5g.</p>
      <p>Porciones por envase:</p>
      <p>60.</p>
                          
		</div>

		</div>
	  <div class="espacio">
		
		<div>
      <p className='titulosuple'>PROTEINA:</p>
      <p>Star Nutrition</p>
				<img className='imgprote' src={proteina2}/>  
        <p>$12.000</p>
      <p>Componente principal:</p>
      <p> aminoácidos.</p>
      <p>Tamaño de la porción:</p>
      <p> cada medida aporta </p>
      <p>24 grs.</p>
          
		</div>			 	
		</div>
    <div class="espacio">
		
		<div>
      <p className='titulosuple'>PRE ENTRENO:</p>
      <p >Star Nutrition</p>
       <img className='imgpre2' src={preentreno2}/>
       <p>$7.000</p>
      <p>Componentes:</p>
      <p>creatina,polidextrosa.</p>
      <p>Peso del Product:</p>
      <p>195gr. </p>
      <p></p>
		</div>
		
		</div>
    </div>





    <div> 
    <h1 className='ruti'>RUTINAS</h1>
   </div>


    <div className='fotos'>
  	<div class="espacio">
		<div>  
      <p className='titulosuple'>PECHO</p>
        <img className='imgpecho' src={pecho} />
        <p>Press Banca.</p>
        <p>Pres Inclinado.</p>   
        <p>Cruce de poleas altas.</p>   
        <p>Cruce de poleas bajas.</p>
        <p>Flexiones.</p>                                 
		</div>

		</div>
	  <div class="espacio">
		
		<div>
    <p className='titulosuple'>ESPALDA</p>
				<img className='imgespalda' src={espalda}/> 
        <p>Jalon al Pecho.</p>
        <p>Remo con Barra.</p>   
        <p>Remo con mancuerna</p>   
        <p>con un brazo.</p>
        <p>Pullover con</p>
        <p>mancuerna.</p>           
		</div>			 	
		</div>
    <div class="espacio">
		
		<div>
    <p className='titulosuple'>PIERNA</p>
       <img className='imgpierna' src={pierna}/>
       <p>Sentadillas.</p>
        <p>Prensa.</p>   
        <p>Estocadas.</p>   
        <p>Hack Squat.</p>
        <p>Extension de </p>  
        <p>cuadriceps.</p>   
		</div>
		
		</div>
    </div>

    
    <div className='fotos'>
  	<div class="espacio">
		<div>  
    <p className='titulosuple'>BICEPS</p>
        <img className='imgpecho' src={biceps} />
        <p>Curl con Barra.</p>
        <p>Curl Martillo.</p>   
        <p>Curl Inclinado con </p>   
        <p>Mancuernas.</p>
        <p>Curl con Cable.</p>                                
		</div>

		</div>
	  <div class="espacio">
		
		<div>
    <p className='titulosuple'>TRICEPS</p>
				<img className='imgespalda' src={triceps}/>
        <p>Fondos de tríceps.</p>
        <p>Press Francés.</p>   
        <p>Tríceps en polea </p>   
        <p>superior con barra.</p>
        <p>Tríceps en polea .</p>
        <p>superior con cuerda.</p>            
		</div>			 	
		</div>
    <div class="espacio">
		
		<div>
    <p className='titulosuple'>HOMBRO</p>
       <img className='imgpierna' src={hombro}/>
       <p>Press Militar</p>
        <p>Elevación lateral </p>   
        <p>con polea baja.</p>   
        <p>Elevaciones Laterales </p>
        <p>con mancuerna.</p>
        <p>Prowler pushups.</p>     
		</div>
		
		</div>
    </div>


   


    <div className='main'></div>

   <div className='Formulario'>
   <GymInscriptionForm></GymInscriptionForm>
   </div>
   


	<footer>
    <div class="foter">
			<h1 class="titulofoter">GYM CENTER</h1>
			<p class="letrafoter">Cophiright©GYMCENTER 2023</p>
      <li>
        
        <a className='iconos' href='https://es-la.facebook.com/'>FACEBOOK</a> 
        <a className='iconos' href='https://www.instagram.com/'>INSTAGRAM</a>
        <a className='iconos' href='https://github.com/'>GIT HUB</a>


      </li>

     
	</div>

  </footer>
	   
    </body>
  )
}
export default Main