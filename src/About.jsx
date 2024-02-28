/* eslint-disable react/prop-types */
export default function About(props) {
  return (
    <>
      <section>
        <h1>Ini {props.children}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, assumenda?</p>
      </section>
    </>
  );
}