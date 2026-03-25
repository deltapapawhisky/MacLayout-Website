# Submitting MacLayout to Homebrew Cask

Step-by-step guide for getting MacLayout listed in `brew install --cask maclayout`.

---

## Prerequisites

- A publicly downloadable DMG hosted at a stable URL (GitHub Releases works well)
- Homebrew installed locally (`brew --version` to confirm)
- A GitHub account

---

## Step 1: Calculate the SHA256 of the DMG

The cask formula requires an exact SHA256 hash so Homebrew can verify download integrity.

```bash
shasum -a 256 MacLayout-1.0.0.dmg
```

This outputs something like:

```
e3b0c44298fc1c149afbf4c8996fb924...  MacLayout-1.0.0.dmg
```

Copy the hex string and replace the `TODO_REPLACE_WITH_ACTUAL_SHA256_OF_DMG` placeholder in `homebrew-cask.rb`.

**Tip:** You can also download and hash in one step:

```bash
curl -L https://github.com/danielwhite/MacLayout/releases/download/v1.0.0/MacLayout-1.0.0.dmg | shasum -a 256
```

---

## Step 2: Fork homebrew-cask

1. Go to <https://github.com/Homebrew/homebrew-cask>.
2. Click **Fork** in the top-right corner.
3. Clone your fork locally:

```bash
git clone https://github.com/<your-username>/homebrew-cask.git
cd homebrew-cask
```

4. Add the upstream remote so you can keep your fork current:

```bash
git remote add upstream https://github.com/Homebrew/homebrew-cask.git
git fetch upstream
```

---

## Step 3: Create the Cask Formula

1. Create a new branch:

```bash
git checkout -b add-maclayout upstream/master
```

2. Copy the formula into the correct location. Cask files are organized alphabetically:

```bash
cp /path/to/homebrew-cask.rb Casks/m/maclayout.rb
```

   Note: The directory structure is `Casks/<first-letter>/<cask-name>.rb`. For MacLayout that is `Casks/m/maclayout.rb`.

3. Verify the formula is valid:

```bash
brew audit --cask --new maclayout
brew style --fix Casks/m/maclayout.rb
```

4. Test the install locally:

```bash
brew install --cask Casks/m/maclayout.rb
```

   Confirm MacLayout.app appears in `/Applications`, launches correctly, and:

```bash
brew uninstall --cask maclayout
```

   removes it cleanly.

---

## Step 4: Submit the PR

1. Commit your changes:

```bash
git add Casks/m/maclayout.rb
git commit -m "Add maclayout 1.0.0"
```

   The commit message format is strict: `Add <cask-name> <version>`.

2. Push to your fork:

```bash
git push origin add-maclayout
```

3. Open a pull request against `Homebrew/homebrew-cask` master. In the PR body:
   - Link to the app's homepage (https://maclayout.com).
   - Confirm you have tested `brew install`, `brew uninstall`, and `brew audit`.
   - Mention the app's purpose briefly: "MacLayout is a macOS menu bar app for saving and restoring window layouts."

4. A Homebrew maintainer will review. Automated CI checks (`brew audit`, `brew style`) must pass. Address any feedback promptly.

---

## Step 5: Naming Conventions and Requirements

### Cask naming rules

| Rule | Example |
|---|---|
| All lowercase, hyphens for spaces | `maclayout` (not `MacLayout`) |
| No `app`, `for-mac`, or redundant suffixes | `maclayout` (not `maclayout-app`) |
| Match the most common name users search for | `maclayout` |
| File goes in `Casks/<first-letter>/` | `Casks/m/maclayout.rb` |

### Formula requirements

- **`version`** must match the download URL exactly and correspond to a real release.
- **`sha256`** must match the file at the `url`. Use `:no_check` only if the URL always points to the latest version (not recommended for GitHub Releases).
- **`url`** must be a direct download link. GitHub Releases URLs work well because they are stable and versioned.
- **`homepage`** must be the app's primary website, not the GitHub repo (unless the repo is the primary site).
- **`depends_on macos:`** should reflect the actual minimum macOS version your app supports. Use the code name in lowercase prefixed with a colon (`:ventura` for 13, `:sonoma` for 14, `:sequoia` for 15).
- **`app`** must exactly match the `.app` bundle name inside the DMG.
- **`zap`** should list all files/directories the app creates so `brew zap` can do a full cleanup. Common locations: `~/Library/Application Support/`, `~/Library/Caches/`, `~/Library/Preferences/`.

### Before submitting, verify

- [ ] `brew audit --cask --new maclayout` passes with no errors
- [ ] `brew style Casks/m/maclayout.rb` passes
- [ ] `brew install --cask Casks/m/maclayout.rb` works
- [ ] `brew uninstall --cask maclayout` removes the app cleanly
- [ ] The download URL is publicly accessible (no authentication required)
- [ ] The DMG is signed and notarized (Homebrew strongly prefers notarized apps)

---

## Updating the Cask for Future Releases

When you release a new version:

1. Update `version` and `sha256` in the formula.
2. Commit with message: `Update maclayout to <new-version>`.
3. Submit a PR. Alternatively, if you set up the `livecheckable` stanza, Homebrew bots may auto-update it.

To add livecheck support, include this block in the formula:

```ruby
livecheck do
  url :url
  strategy :github_latest
end
```

This tells Homebrew's automated update system to check GitHub Releases for new versions.
