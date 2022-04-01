const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema({
    // 시도교육청코드
    ATPT_OFCDC_SC_CODE: {
        type: String,
        required: true,
    },
    // 시도교육청명
    ATPT_OFCDC_SC_NM: {
        type: String,
        required: true,
    },
    // 표준학교코드
    SD_SCHUL_CODE: {
        type: String,
        required: true,
    },
    // 학교명
    SCHUL_NM: {
        type: String,
        required: true,
    },
    // 영문학교명
    ENG_SCHUL_NM: {
        type: String,
        required: true,
    },
    // 학교종류명
    SCHUL_KND_SC_NM: {
        type: String,
        required: true,
    },
    // 소재지명
    LCTN_SC_NM: {
        type: String,
        required: true,
    },
    // 관할조직명
    JU_ORG_NM: {
        type: String,
        required: true,
    },
    // 설립명
    FOND_SC_NM: {
        type: String,
        required: true,
    },
    // 도로명우편번호
    ORG_RDNZC: {
        type: String,
        required: true,
    },
    // 도로명주소
    ORG_RDNMA: {
        type: String,
        required: true,
    },
    // 도로명상세주소
    ORG_RDNDA: {
        type: String,
        required: true,
    },
    // 전화번호
    ORG_TELNO: {
        type: String,
        required: true,
    },
    // 홈페이지주소
    HMPG_ADRES: {
        type: String,
        required: true,
    },
    // 남녀공학구분명
    COEDU_SC_NM: {
        type: String,
        required: true,
    },
    // 팩스번호
    ORG_FAXNO: {
        type: String,
        required: true,
    },
    // 고등학교구분명
    HS_SC_NM: {
        type: String,
        required: false,
    },
    // 산업체특별학급존재여부
    INDST_SPECL_CCCCL_EXST_YN: {
        type: String,
        required: false,
    },
    // 고등학교일반실업구분명
    HS_GNRL_BUSNS_SC_NM: {
        type: String,
        required: false,
    },
    // 특수목적고등학교계열명
    SPCLY_PURPS_HS_ORD_NM: {
        type: String,
        required: false,   
    },
    // 입시전후기구분명
    ENE_BFE_SEHF_SC_NM: {
        type: String,
        required: false,
    },
    // 주야구분명
    DGHT_SC_NM: {
        type: String,
        required: false,
    },
    // 설립일자
    FOND_YMD: {
        type: String,
        required: true,
    },
    // 개교기념일
    FOAS_MEMRD: {
        type: String,
        required: true,
    },
    // 수정일
    LOAD_DTM: {
        type: String,
        required: true,
    }
})

const School = mongoose.model('schools', schoolSchema)

module.exports = School

export {}