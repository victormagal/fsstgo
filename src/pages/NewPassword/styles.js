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
  containerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  baseTitle: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 28,
    color: '#233568',
    marginBottom: 24,
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
});
