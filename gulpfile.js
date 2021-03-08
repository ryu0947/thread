// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグイン
const sass = require("gulp-sass");
// @importの記述を簡潔にする
const glob = require('gulp-sass-glob');

// Sassをコンパイルするタスク
const compileSass = () =>
  // scssフォルダの拡張子が.scssのファイルを取得
  src("./sass/**/*.scss")
  // @importの記述を簡潔にする
  .pipe(glob())
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダー以下に保存
    .pipe(dest("./css"));

// Sassファイルを監視し、変更があったらscssファイルを変換します
const watchSassFiles = () => watch("./sass/**/*.scss", compileSass);

// npx gulpというコマンドを実行した時、watchSassFilesが実行
exports.default = watchSassFiles;