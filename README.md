# Hemanth K P: AWS & DevSecOps contractor site

A static sales page for freelance AWS and DevSecOps work. Its one job is to make a startup CTO trust me and book a 15-minute call.

Plain HTML, CSS, and a little vanilla JavaScript, with no framework or build step. `assets/js/site.js` runs the theme toggle, and the page still works without it. `404.html` has a few lines of its own that find the home page when the site runs from a project subpath. Headings use one Google Font, Fraunces.

## File structure

```
index.html              Main page
404.html                Not-found page, self-contained
.nojekyll               Tells GitHub Pages to skip Jekyll
assets/css/style.css    Shared stylesheet
assets/js/site.js       Theme toggle
assets/img/             Favicon, case-study covers, and architecture diagrams
case-studies/           One page per case study
```

## Check before publishing

Every placeholder is filled in. Check these are the ones you want:

| Originally | Now |
| --- | --- |
| `CALENDLY_URL` | `https://calendly.com/hemanthkp98/15min` |
| `GITHUB_URL` | `https://github.com/hemanthkp98` |
| `LINKEDIN_URL` | `https://www.linkedin.com/in/hemanth-kp-a13a91185/` |
| Email | `hemanthkp98.work@gmail.com` |
| Headshot | `assets/img/hemanth.jpg`, a 408×408 crop of your photo |
| KubeNova repo | `https://github.com/hemanthkp98/kubenova` |
| DriftSentry repo | `https://github.com/hemanthkp98/driftsentry` |
| k8s-upgrade-agent repo | `https://github.com/hemanthkp98/k8s-upgrade-agent` |
| Trivy Remediation Agent repo | `https://github.com/hemanthkp98/trivy-remediation-agent` |
| OpenLens Chat Extension repo | `https://github.com/hemanthkp98/openlens-chat-extension` |

### Also review

- **Case-study details.** The "What I did" bullets, context, and stack tags expand on short summaries. Edit each one so it matches what you actually did.
- **Architecture diagrams.** `assets/img/<slug>.svg` are generic placeholders and say so on the image. Replace them, and update the `alt` text to match.
- **Location.** The site deliberately does not say where you are based. Your LinkedIn and GitHub profiles are separate, so check what they show.
- **Case-study covers.** `assets/img/cover-<slug>.svg` illustrate each case study's subject on the home page. Check they match the real work.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create a public repo named `<username>.github.io`. For this account, that is `hemanthkp98.github.io`.
2. Push this code:
   ```sh
   git remote add origin git@github.com:<username>/<username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set the branch to `main` and the folder to `/ (root)`, then select **Save**.
6. After a minute or two, the site is live at `https://<username>.github.io/`.

With any other repo name, the same steps publish to `https://<username>.github.io/<repo>/`. All links are relative, so the site works there too.

## Add a custom domain later

1. Add the DNS records at your registrar:
   - For a subdomain such as `www.example.com`: a `CNAME` record pointing to `<username>.github.io`.
   - For an apex domain such as `example.com`: `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
2. Go to **Settings → Pages → Custom domain**, enter the domain, and select **Save**. GitHub adds a `CNAME` file to the repo, so pull before your next push.
3. Once the DNS check passes, turn on **Enforce HTTPS**.

Once the final URL is settled, you can add `<link rel="canonical">`, `og:url`, and `og:image` to each page. They need absolute URLs, so they are left out for now.
