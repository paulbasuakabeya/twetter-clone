{ pkgs }: {
	deps = [
   pkgs.speech-tools
   pkgs.dit
		pkgs.nodejs-18_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}