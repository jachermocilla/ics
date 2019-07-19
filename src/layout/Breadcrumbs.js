import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function Breadcrumbs(props) {

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {
        props.crumbs.map((c,i) => {
          if (i === props.crumbs.length - 1) {
            return <Breadcrumb.Item active key={i}>{c.text}</Breadcrumb.Item>
          }
          else {
            return <Breadcrumb.Item key={i} href={c.link}>{c.text}</Breadcrumb.Item>
          }
        })
      }
    </Breadcrumb>
  )
}


/**
 * To use for a page, call this component and pass to it an array called `crumbs`. `crumbs` should contains objects which contain a `text` and `link` field.
 *
 * The list of objects should contain all the pages (in order) that lead to the current page (including the page itself) where you want to embed the breadcrumbs, but not including the home page which is added automatically.
 *
 * The last link in the array will automatically show up as a disabled link on the breadcrumbs to indicate that it is the current page.
 * */
