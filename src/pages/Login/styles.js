import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  containerRight: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    fontFamily: 'WorkSans-Medium',
    fontSize: 18,
    color: '#868E96',
    padding: 16,
    borderRadius: 5,
    marginBottom: 16,
  },
  keyText: {
    fontFamily: 'WorkSans-Light',
    fontSize: 16,
    color: '#868E96',
    textDecorationLine: 'underline',
  },
  btnSubmit: {
    width: '100%',
    backgroundColor: '#233568',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 16,
    marginVertical: 32,
  },
  submitText: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 18,
    color: '#F8F8F8',
    textTransform: 'uppercase',
  },
  txtNewCount: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 18,
    color: '#373A42',
  },
  btnNewCount: {
    color: '#868E96',
    marginTop: 10,
  },
  txtProtected: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 18,
    color: '#373A42',
    marginTop: 60,
  },
  btnProtected: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 18,
    color: '#3E74FF',
  },
});
