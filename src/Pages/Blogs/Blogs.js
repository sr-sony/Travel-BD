import React from "react";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-0 gap-4 my-10 md:m-5">
      <div className="card rounded-xl shadow-lg bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">Difference between SQL and NoSQL.</h2>
          <p className='text-xl'>
            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
            or Relational Databases, whereas NoSQL is a Non-relational or
            Distributed Database. <br></br> Comparing SQL vs NoSQL databases,
            SQL databases are table-based databases, whereas NoSQL databases can
            be document-based, key-value pairs, and graph databases. <br></br>{" "}
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br></br> SQL databases have a predefined
            schema, whereas NoSQL databases use a dynamic schema for
            unstructured data. <br></br> Comparing NoSQL vs SQL performance, SQL
            requires specialized DB hardware for better performance while NoSQL
            uses commodity hardware.
          </p>
        </div>
      </div>
      <div className="card rounded-xl shadow-lg bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">What is JWT, and how does it work?</h2>
          <p className='text-xl'>
            JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims
            to share security information or authorization/authentication
            requests between a client and a server. Each JWT contains encoded
            JSON objects. JWTs are signed using a cryptographic algorithm by the
            tokens issuer to ensure that No one could alter the claims after the
            token is issued and later can be used by the receiving party to
            verify the token. WT or JSON Web Tokens are mainly used for
            authentication, authorization, and information exchange.
          </p>
        </div>
      </div>
      <div className="card rounded-xl shadow-lg bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">
            What is the difference between javascript and NodeJS?
          </h2>
          <p className='text-xl'>
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option. <br></br> 2. JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node.js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. It requires
            libraries that can be conveniently accessed from JavaScript
            programming to be more helpful.<br></br> 3. Any engine may run JavaScript. As
            a result, writing JavaScript is incredibly easy, and any working
            environment is similar to a complete browser. Node.js, on the other
            hand, only enables the V8 engine. Written JavaScript code, on the
            other hand, can run in any context, regardless of whether the V8
            engine is supported.<br></br> 4. A specific non-blocking operation is
            required to access any operating system. There are a few essential
            objects in JavaScript, but they are entirely OS-specific. Node.js,
            on the other hand, can now operate non-blocking software tasks out
            of any JavaScript programming. It contains no OS-specific constants.
            Node.js establishes a strong relationship with the system files,
            allowing companies to read and write to the hard drive.<br></br> 5. The
            critical benefits of JavaScript include a wide choice of interfaces
            and interactions and just the proper amount of server contact and
            direct visitor input. Node.js, on the other hand, offers node
            package management with over 500 modules and the capacity to handle
            many requests at the same time. It also offers the unique ability to
            enable microservice architecture and the Internet of Things. Even
            when comparing node js vs. react js, node js always wins.
          </p>
        </div>
      </div>
      <div className="card rounded-xl shadow-lg bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">How does NodeJS handle multiple requests at the same time?</h2>
          <p className='text-xl'>
          Node took a slightly different approach to handling multiple concurrent requests at the same time if you compare it to some other popular servers like Apache. Spawning a new thread for each request is expensive. Also, threads are doing nothing when awaiting other operations’ result (i.e.: database read). That’s why Node is using one thread instead. Such an approach has numerous advantages. No overhead comes with creating new threads. Also, your code is much easier to reason about, as you don’t have to worry about what will happen if two threads access the same variable. It’s because that simply cannot happen. There are some drawbacks as well. Node isn’t the best choice for applications that mostly deal with CPU intensive computing. On the other hand, it excels at handling multiple I/O requests. So, let’s focus on this part for a bit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
