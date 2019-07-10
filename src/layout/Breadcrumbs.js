import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function Breadcrumbs(props) {

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {
        props.crumbs.map((c,i) => <Breadcrumb.Item key={i} href={c.link}>{c.text}</Breadcrumb.Item>)
      }
    </Breadcrumb>
  )
}
