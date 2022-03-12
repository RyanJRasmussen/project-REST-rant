const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oh no, there's nothing here!</p>
                <div>
                    <img src="/images/empty.jpg" alt="A whole lot of nothing" width="500"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@emileseguin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ÉMILE SÉGUIN ✳️✳️✳️</a> on <a href="https://unsplash.com/s/photos/empty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404