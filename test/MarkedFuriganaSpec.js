var assert = require("chai").assert;
var marked = require("../lib/marked");

describe("Marked Furigana Extension tests",function(){
    it("should render simple standard markdown",function(){
        assert.equal("<p><strong>Test</strong></p>\n",marked("**Test**"));
    });

    it("should render simple furigana markdown",function(){
        assert.equal("<p><ruby>福<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby></p>\n",marked("福（ふく）"));
    });

    it("should render more furigana markdown",function(){
        assert.equal("<p>Furigana sample <ruby>福<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby></p>\n",marked("Furigana sample 福（ふく）"));
    });

    var testData = [
    [
        "日（にち）",
            "<p><ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby></p>\n"
    ],
    [
        "Le kanji 人（ひと） signifie **personne**",
            "<p>Le kanji <ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby> signifie <strong>personne</strong></p>\n"
    ],
    [
        "番（ばん）",
            "<p><ruby>番<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby></p>\n"
    ],
    [
        "一（いち）番（ばん）",
            "<p><ruby>一<rp>(</rp><rt>いち</rt><rp>)</rp></ruby><ruby>番<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby></p>\n"
    ],
    [
        "いち番（ばん）の人は",
            "<p>いち<ruby>番<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>の人は</p>\n"
    ],
    [
        "一（いち）番（ばん）は安（やす）い",
            "<p><ruby>一<rp>(</rp><rt>いち</rt><rp>)</rp></ruby><ruby>番<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>は<ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>い</p>\n"
    ],
    [
        "始（はじ）まる",
            "<p><ruby>始<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まる</p>\n"
    ],
    [
        "**始（はじ）まる**",
            "<p><strong><ruby>始<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まる</strong></p>\n"
    ],
    [
        "__始（はじ）まる__",
            "<p><strong><ruby>始<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まる</strong></p>\n"
    ],
    [
        "この人（ひと）の名（な）前（まえ）はヴァンサンです。",
            "<p>この<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>の<ruby>名<rp>(</rp><rt>な</rt><rp>)</rp></ruby>" +
            "<ruby>前<rp>(</rp><rt>まえ</rt><rp>)</rp></ruby>はヴァンサンです。</p>\n"
    ],
    [
        "この人（ひと）の名（な）前（まえ）はながいです",
            "<p>この<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>の<ruby>名<rp>(</rp><rt>な</rt><rp>)</rp></ruby>" +
            "<ruby>前<rp>(</rp><rt>まえ</rt><rp>)</rp></ruby>はながいです</p>\n"
    ],
    /*[
        "TestOf**InsideStrong**Value",
            "<p>TestOf**InsideStrong**Value</p>\n"
    ],*/
    [
        "あの人（ひと）",
            "<p>あの<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby></p>\n"
    ],
    [
        "外人（じん）",
            "<p>外<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby></p>\n"
    ],
    [
        "Title\n=======\nBody",
            '<h1 id="title">Title</h1>\n<p>Body</p>\n'
    ],
    [
        "Title\n\n人（じん）",
            "<p>Title</p>\n<p><ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby></p>\n"
    ],
    /*[
        "フランス語 | Actif | Passif\n" +
        "---------|-------|---------\n" +
        "tirer | 抜（め）く | 抜かれる\n"+
        "tirer|抜（め）く|抜かれる\n",
            "<table>\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th>フランス語 </th>\n" +
            "      <th>Actif </th>\n" +
            "      <th>Passif</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <td>tirer </td>\n" +
            "      <td><ruby>抜<rp>(</rp><rt>め</rt><rp>)</rp></ruby>く </td>\n" +
            "      <td>抜かれる</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>tirer</td>\n" +
            "      <td><ruby>抜<rp>(</rp><rt>め</rt><rp>)</rp></ruby>く</td>\n" +
            "      <td>抜かれる</td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>"
    ],
    [
        "|col1 | col2 | col3|\n" +
        "|---------|-------|---------|\n" +
        "|value1 | value2 | value3|\n" +
        "|value1 | value2 | value3|\n",
            "<table>\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th>col1 </th>\n" +
            "      <th>col2 </th>\n" +
            "      <th>col3</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <td>value1 </td>\n" +
            "      <td>value2 </td>\n" +
            "      <td>value3</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>value1 </td>\n" +
            "      <td>value2 </td>\n" +
            "      <td>value3</td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>"
    ],*/
    [
        "マリアンヌさんが**くるかどうか**分（わ）かりません",
            "<p>マリアンヌさんが<strong>くるかどうか</strong><ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>かりません</p>\n"
    ]];

    it("should render test data",function(){
        testData.forEach(function(it){
            assert.equal(it[1],marked(it[0]));
        });
    });
});