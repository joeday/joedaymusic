import './App.css';

function App() {
  return (
    <div className="App">
      <main className="landing-page">
        <header className="site-header">Joe Day</header>
        <section className="site-content">
          <h1>New album anouncement</h1>
          <p className="divider">+ + +</p>
          <p>The new album is done.</p>
          <p>Keep your ear to the ground and be the first to know everything by joining the mailing list.</p>
          


          <div id="revue-embed" className="revue-email-form">
            <form action="https://www.getrevue.co/profile/joeday/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
              <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
              <input className="button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
              {/* <div className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div> */}
            </form>
          </div>

        </section>

        <footer className="site-footer">
          Photo by Bruno Bergher
        </footer>
      </main>
    </div>
  );
}

export default App;
