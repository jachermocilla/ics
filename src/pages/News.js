import React, { Component } from 'react';
import './News.css';
import Breadcrumbs from '../layout/Breadcrumbs';
import { Container, Row, Col } from 'react-bootstrap';

export default class News extends Component {

  render() {
    return (
      <div>
        <Breadcrumbs crumbs={[{ text: 'News Feed' }]}/>

        {
          this.props.newsData ?
            this.props.newsData.map((n, i) => {
              return (
                <div key={i} className="newsfeed-item">
                  <h2><a href={`/news/${n.filename}`}>{n.title}</a></h2>
                  <span className="newsfeed-item-date">{n.date}</span>
                  <span> | </span>
                  <span>Published by <a href={n.profileURL}>{n.author}</a></span>
                  <br /> <br />
                  <Container>
                    <Row>
                      <Col xs={12} lg={2}><img style={{ width: '100%', height: 'auto' }} src={n.imageURL} alt={n.imageAlt} /></Col>
                      <Col xs={12} lg={10}><p>{n.summary} <a href={`/news/${n.filename}`}>Read More</a></p></Col>
                    </Row>
                  </Container>
                  <hr />
                </div>
              )
            })
            :
            'Nothing to show'
        }

        {/* pagination */}
      </div>
    )
  }
}
