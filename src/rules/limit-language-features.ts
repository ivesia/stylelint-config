/**
 * Limit language features
 */
export = {
    "rules": {
        /**
         * 禁止使用命名的颜色
         * @see https://stylelint.io/user-guide/rules/color-named/
         */
        "color-named": "never",

        /**
         * 禁止使用十六进制颜色
         * @see https://stylelint.io/user-guide/rules/color-no-hex/
         */
        // "color-no-hex": false,

        /**
         * 函数黑名单
         * @see https://stylelint.io/user-guide/rules/function-disallowed-list/
         */
        "function-disallowed-list": [],

        /**
         * 禁止使用相对协议的链接
         * @see https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
         */
        // "function-url-no-scheme-relative": true,

        /**
         * URL 资源协议黑名单
         * @see https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list/
         */
        "function-url-scheme-disallowed-list": ["ftp"],

        /**
         * URL 资源协议白名单
         * @see https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list/
         */
        "function-url-scheme-allowed-list": ["http", "https", "data"],

        /**
         * 函数白名单
         * @see https://stylelint.io/user-guide/rules/function-allowed-list/
         */
        // "function-allowed-list": [],

        /**
         * keyframes 名称正则
         * @see https://stylelint.io/user-guide/rules/keyframes-name-pattern/
         */
        // "keyframes-name-pattern": "",

        /**
         * 限制小数位数
         * @see https://stylelint.io/user-guide/rules/number-max-precision/
         */
        "number-max-precision": 3,

        /**
         * 最小的动画时间
         * @see https://stylelint.io/user-guide/rules/time-min-milliseconds/
         */
        "time-min-milliseconds": 50,

        /**
         * 单位黑名单
         * @see https://stylelint.io/user-guide/rules/unit-disallowed-list/
         */
        "unit-disallowed-list": [],

        /**
         * 单位白名单
         * @see https://stylelint.io/user-guide/rules/unit-allowed-list/
         */
        // "unit-allowed-list": [],

        /**
         * 禁止在简写属性中使用冗余值
         * @see https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
         */
        "shorthand-property-no-redundant-values": true,

        /**
         * 禁止值带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
         */
        "value-no-vendor-prefix": [true, {ignoreValues: ["box", "optimize-contrast"]}],

        /**
         * 自定义属性的匹配模式
         * @see https://stylelint.io/user-guide/rules/custom-property-pattern/
         */
        // "custom-property-pattern": "",

        /**
         * 属性黑名单
         * @see https://stylelint.io/user-guide/rules/property-disallowed-list/
         */
        "property-disallowed-list": [],

        /**
         * 禁止属性带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
         */
        "property-no-vendor-prefix": [true, {ignoreProperties: ["mask", "box-orient"]}],

        /**
         * 属性白名单
         * @see https://stylelint.io/user-guide/rules/property-allowed-list/
         */
        // "property-allowed-list": [],

        /**
         * 禁止使用可以缩写却不缩写的属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
         */
        "declaration-block-no-redundant-longhand-properties": true,

        /**
         * 禁止在声明中使用 `!important`
         * @see https://stylelint.io/user-guide/rules/declaration-no-important/
         */
        "declaration-no-important": true,

        /**
         * 声明中使用的属性-单位黑名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/
         */
        "declaration-property-unit-disallowed-list": {},

        /**
         * 声明中使用的属性-单位白名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/
         */
        // "declaration-property-unit-allowed-list": [],

        /**
         * 声明中使用的属性-值黑名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
         */
        "declaration-property-value-disallowed-list": {},

        /**
         * 声明中使用的属性-值白名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list/
         */
        // "declaration-property-value-allowed-list": [],

        /**
         * 单行声明块中声明的数量
         * @see https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
         */
        "declaration-block-single-line-max-declarations": 1,

        /**
         * attribute 选择器操作符黑名单
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list/
         */
        "selector-attribute-operator-disallowed-list": [],

        /**
         * attribute 选择器操作符白名单
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list/
         */
        // "selector-attribute-operator-allowed-list": [],

        /**
         * 类选择器匹配模式
         * @see https://stylelint.io/user-guide/rules/selector-class-pattern/
         */
        // "selector-class-pattern": "",

        /**
         * 关系选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list/
         */
        "selector-combinator-disallowed-list": [],

        /**
         * 关系选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-combinator-allowed-list/
         */
        // "selector-combinator-allowed-list": [],

        /**
         * ID 选择器匹配模式
         * @see https://stylelint.io/user-guide/rules/selector-id-pattern/
         */
        // "selector-id-pattern": "",

        /**
         * 属性选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-attribute/
         */
        "selector-max-attribute": 4,

        /**
         * 类选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-class/
         */
        "selector-max-class": 6,

        /**
         * 关系选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-combinators/
         */
        "selector-max-combinators": 3,

        /**
         * 选择器最大层数
         * @see https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
         */
        "selector-max-compound-selectors": 6,

        /**
         * 选择器中相邻空行数量
         * @see https://stylelint.io/user-guide/rules/selector-max-empty-lines/
         */
        "selector-max-empty-lines": 0,

        /**
         * ID 选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-id/
         */
        "selector-max-id": 2,

        /**
         * 伪类选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
         */
        "selector-max-pseudo-class": 2,

        /**
         * 选择器的优先级
         * @see https://stylelint.io/user-guide/rules/selector-max-specificity/
         */
        "selector-max-specificity": "2,4,3",

        /**
         * 类型选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-type/
         */
        "selector-max-type": 3,

        /**
         * 通用选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-universal/
         */
        "selector-max-universal": 1,

        /**
         * 选择器嵌套模式
         * @see https://stylelint.io/user-guide/rules/selector-nested-pattern/
         */
        // "selector-nested-pattern": "",

        /**
         * 对类型选择器限制
         * @see https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
         */
        "selector-no-qualifying-type": [true, {ignore: ["attribute", "class"]}],

        /**
         * 禁止选择器带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
         */
        "selector-no-vendor-prefix": true,

        /**
         * 伪类选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list/
         */
        "selector-pseudo-class-disallowed-list": [],

        /**
         * 伪类选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list/
         */
        // "selector-pseudo-class-allowed-list": [],

        /**
         * 伪元素选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list/
         */
        "selector-pseudo-element-disallowed-list": [],

        /**
         * 伪元素选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list/
         */
        // "selector-pseudo-element-allowed-list": [],

        /**
         * 媒体查询特性名称黑名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list/
         */
        "media-feature-name-disallowed-list": [],

        /**
         * 禁止媒体查询特性名称带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
         */
        "media-feature-name-no-vendor-prefix": true,

        /**
         * 媒体查询特性值白名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list/
         */
        // "media-feature-name-value-allowed-list": [],

        /**
         * 媒体查询特性名称白名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-allowed-list/
         */
        // "media-feature-name-allowed-list": [],

        /**
         * 媒体查询名称匹配模式
         * @see https://stylelint.io/user-guide/rules/custom-media-pattern/
         */
        // "custom-media-pattern": "",

        /**
         * at 规则黑名单
         * @see https://stylelint.io/user-guide/rules/at-rule-disallowed-list/
         */
        "at-rule-disallowed-list": [],

        /**
         * 禁止 at 规则带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
         */
        "at-rule-no-vendor-prefix": true,

        /**
         * at 规则必要属性
         * @see https://stylelint.io/user-guide/rules/at-rule-property-required-list/
         */
        "at-rule-property-required-list": {
            "font-face": ["font-family", "font-style"]
        },

        /**
         * at 规则白名单
         * @see https://stylelint.io/user-guide/rules/at-rule-allowed-list/
         */
        // "at-rule-allowed-list": [],

        /**
         * 注释词语黑名单
         * @see https://stylelint.io/user-guide/rules/comment-word-disallowed-list/
         */
        "comment-word-disallowed-list": [],

        /**
         * 允许嵌套的深度
         * @see https://stylelint.io/user-guide/rules/max-nesting-depth/
         */
        "max-nesting-depth": 4,

        /**
         * 禁止未声明的动画名称
         * @see https://stylelint.io/user-guide/rules/no-unknown-animations/
         */
        "no-unknown-animations": true
    }
};
