import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginBottom: 15,
    color: '#868E96',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#233568',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 30,
  },
  submitText: {
    color: '#F8F8F8',
    fontSize: 18,
  },
  txtMyKey: {
    width: '100%',
    alignItems: 'flex-end',
  },
  btnKey: {
    color: '#868E96',
    borderBottomWidth: 1,
    borderBottomColor: '#868E96',
  },
  keyText: {
    color: '#868E96',
  },
  txtNewCount: {
    color: '#373A42',
    marginTop: 20,
  },
  btnNewCount: {
    color: '#868E96',
    marginTop: 10,
  },
  txtProtected: {
    color: '#373A42',
    marginTop: 26,
  },
  btnProtected: {
    color: '#3E74FF',
  },
});
