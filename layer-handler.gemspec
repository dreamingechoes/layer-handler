$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "layer/handler/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "layer-handler"
  s.version     = Layer::Handler::VERSION
  s.authors     = ["Ivan Gonzalez"]
  s.email       = ["xixon.sound@gmail.com"]
  s.homepage    = "https://dreamingechoes.github.io/layer-handler/demo"
  s.summary     = "Simple JS library to handle Google Tag Manager easily"
  s.description = "Simple JS library to handle Google Tag Manager easily."
  s.license     = "MIT"

  s.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  s.bindir        = "exe"
  s.executables   = s.files.grep(%r{^exe/}) { |f| File.basename(f) }
  s.require_paths = ["lib"]
end
