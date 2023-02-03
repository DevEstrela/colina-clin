import Banner from 'components/Banner'
import Service from 'components/Service';
import Main from 'components/Main'
import Topics from 'components/Topics';
import Footer from 'components/Footer';
import Header from 'components/Heaader';
import Form from 'components/Form'

function Home(){
    return(
        <>
        <Header/>
        <Banner/>
        <Service/>
        <Main/>
        <Topics/> 
        <Form/>
        <Footer/>
        </>
    )
}

export default Home;