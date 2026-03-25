cask "maclayout" do
  version "1.0.0"
  sha256 "TODO_REPLACE_WITH_ACTUAL_SHA256_OF_DMG" # TODO: Calculate with: shasum -a 256 MacLayout-1.0.0.dmg

  url "https://github.com/danielwhite/MacLayout/releases/download/v#{version}/MacLayout-#{version}.dmg"
  name "MacLayout"
  desc "Menu bar app for saving and restoring window layouts"
  homepage "https://maclayout.com"

  depends_on macos: ">= :ventura"

  app "MacLayout.app"

  zap trash: [
    "~/Library/Application Support/com.maclayout.app",
    "~/Library/Caches/com.maclayout.app",
    "~/Library/HTTPStorages/com.maclayout.app",
    "~/Library/Preferences/com.maclayout.app.plist",
    "~/Library/Saved Application State/com.maclayout.app.savedState",
  ]
end
