import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta(){
  return [
    { title: 'GuitarLA - Sobre Nosotros' },
    { description: 'Venta de Guitarras, blog de música' }
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate laudantium corporis totam quibusdam, 
            eligendi aliquid debitis omnis rerum. Impedit accusantium aspernatur fugit voluptatibus praesentium voluptas 
            modi rerum distinctio. Ipsum, dignissimos.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate laudantium corporis totam quibusdam, 
            eligendi aliquid debitis omnis rerum. Impedit accusantium aspernatur fugit voluptatibus praesentium voluptas 
            modi rerum distinctio. Ipsum, dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti 
            nemo laboriosam itaque, laborum sed tenetur, vitae aperiam vel optio qui! Nobis saepe odit dignissimos maiores 
            enim molestiae! Recusandae, sit.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros