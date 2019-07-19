import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      latest: this.props.newsData.splice(0, 3)
    }
  }

  render() {
    const { latest } = this.state

    return (
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <h1>Latest</h1>
              {
                latest ?
                latest.map((n, i) => {
                  if (i === 0) {
                    return (
                      <Row key={i}>
                        <Col xs={12}>
                          <a href={`/news/${n.filename}`}><span>{n.title}</span></a>

                          <span className="newsfeed-item-date">{n.date}</span>
                          <span> | </span>
                          <span>Published by <a href={n.profileURL}>{n.author}</a></span>

                        </Col>

                        {/* <Col xs={12} style={{marginBottom: '10px'}}>
                          <span className="newsfeed-item-date">{n.date}</span>
                          <span> | </span>
                          <span>Published by <a href={n.profileURL}>{n.author}</a></span>
                        </Col> */}

                        <Col xs={12} lg={6}><img style={{ width: '100%', height: 'auto' }} src={n.imageURL} alt={n.imageAlt} /></Col>

                        <Col xs={12} lg={6}>{n.summary}</Col>

                        <Col xs={12}><hr /></Col>
                      </Row>
                    )
                  }

                  else {
                    return (
                      <Row key={i}>
                        <Col xs={12}><a href={`/news/${n.filename}`}><h2>{n.title}</h2></a></Col>
                        <Col xs={12} lg={3}><img style={{ width: '100%', height: 'auto' }} src={n.imageURL} alt={n.imageAlt} /></Col>
                        <Col xs={12} lg={9}>{n.summary}</Col>
                        { i === 1 ? <Col xs={12}><hr /></Col> : '' }
                      </Row>
                    )
                  }
                })
                : ''
              }

              <a href={`/newsfeed`}>More News</a>
          </Col>

          <Col xs={12} lg={3}>
            <div className="fb-page" data-href="https://www.facebook.com/ICS.UPLB/" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ICS.UPLB/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ICS.UPLB/">Institute of Computer Science</a></blockquote></div>
          </Col>
        </Row>
      </Container>
    )
  }
}

// const newsList = (props) =>
