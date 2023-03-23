import Button from './evento/Button'
export default function Eventos(){
    function meuEvento(){
        console.log(`Ativando o Primeiro Evento!`)
    }
    function segundoEvento(){
        console.log('Ativando o segundo Evento!')
    } 
    return(
        <div>
            <p>Clique para disparar um Evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento"/>
           
        </div>
    )
}