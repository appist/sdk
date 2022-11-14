{ pkgs ? import (builtins.fetchTarball {
  name = "nixpkgs-unstable-2022-08-10";
  url = "https://github.com/nixos/nixpkgs/archive/8993cc730d11148ef59e84a8f15f94f688e1bfd1.tar.gz";
  sha256 = "02kh7i8b8mfj97xmbxpkxkl9z597cpv0qf6vnfamddidmhzw1c09"; # Hash obtained using `nix-prefetch-url --unpack <url>`
}) {} }:

with pkgs;

mkShell {
  buildInputs = [
    gnupg
    nodejs-18_x
    nodePackages.pnpm
  ];

  shellHook =
    ''
      # Setup the terminal prompt.
      export PS1="(nix-shell) \W $ "

      # Setup the command aliases.
      cli() {
        pnpm -C packages/cli $@
      }

      core() {
        pnpm -C packages/core $@
      }

      react() {
        pnpm -C packages/react $@
      }

      docs() {
        pnpm -C docs $@
      }

      # Setup the project.
      pnpm install
      clear
    '';
}
