import React from 'react';
import './Container.css'

class Container extends React.Component {
    render() {
        return (
            <section className={this.props.class}>
                <header className="container-title">{this.props.title}</header>
                <div className="container-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquid debitis reiciendis, exercitationem voluptate eius veritatis autem voluptatem laboriosam ex quis ipsa et deserunt. Temporibus voluptatem voluptates iusto voluptas autem.</div>
            </section>
        );
    }
}

export default Container