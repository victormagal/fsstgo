import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerLogo: {
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 40,
  },
  baseTitle: {
    color: '#233568',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  innerTitle: {
    color: '#616368',
    fontSize: 16,
    marginTop: 18,
  },
  box: {
    width: 51,
    height: 65,
    color: '#868E96',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    margin: 4,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  btnSubmit: {
    backgroundColor: '#233568',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
  },
  submitText: {
    color: '#F8F8F8',
    fontSize: 18,
  },
  btnSendCode: {
    color: '#868E96',
    marginTop: 10,
  },
  txtMyCode: {
    width: '100%',
    alignItems: 'center',
  },
  btnCode: {
    color: '#868E96',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#868E96',
  },
  sendCode: {
    color: '#868E96',
  },
});
