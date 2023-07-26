import Title from './Title';
import Article from './Article';
import {servicesArticles} from '../data';

function Services(props) {
  return (
      <section className="section services" id="services">
        <Title title={'our'} subTitle={'services'}/>

        <div className="section-center services-center">
          {
            servicesArticles.map((item)=>{
              return <Article key={item.id} {...item}/>
            })
          }
        </div>
      </section>
  );
};

export default Services;